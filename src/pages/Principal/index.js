import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, Alert, ActivityIndicator, LogBox} from 'react-native';
import {
  SafeAreaView,
  ViewActivity,
  CategoriaView,
  BannerView,
  ViewPrincipal,
  ViewRestaurantes,
  TituloRestaurantes,
  ButtonTipoSelect,
  TextTipoSelect,
  SelectTipo,
  CategoriaList,
  RestaurantesList,
  BannerList,
} from './styles';

import CategoriaItem from '../../components/CategoriaItem'
import BannerItem from '../../components/BannerItem'
import RestauranteItem from '../../components/RestauranteItem'


export default function Principal() {
  const [banners, setBanners] = useState([])
  const [categorias, setCategorias] = useState([])
  const [restaurantes, setRestaurantes] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [tipo, setTipo] = useState('Entrega');
  
  useEffect(() => {
    async function buscarDados() {
      try {
        const response = await fetch('http://my-json-server.typicode.com/pablohdev/app-ifood-clone/db');
        const data = await response.json();
        setLoaded(true)
        setBanners(data.banner_principal);
        setCategorias(data.categorias);
        setRestaurantes(data.restaurantes);
        LogBox.ignoreAllLogs();
      } catch (e) {
        Alert.alert('Erro consultada' + e);
      }
    }
    buscarDados()
  }, [])

  const ViewHome = () => {
    return (
      <ViewPrincipal>
        <SelectTipo>
          <ButtonTipoSelect onPress={() => setTipo('Entrega')}><TextTipoSelect selected={tipo == 'Entrega'}>Entrega</TextTipoSelect></ButtonTipoSelect>
          <ButtonTipoSelect onPress={() => setTipo('Retirada')}><TextTipoSelect selected={tipo == 'Retirada'}>Retirada</TextTipoSelect></ButtonTipoSelect>
        </SelectTipo>
        <CategoriaView>
          <CategoriaList
            data={categorias}
            keyExtrator={(item) => (item.id.toString())}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) =>(
              <CategoriaItem foto={item.img_url} texto={item.nome} />
            )}
          />
        </CategoriaView>
        <BannerView>
          <BannerList 
            data={banners}
            keyExtrator={(item) => (item.id.toString())}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) =>(
              <BannerItem foto={item.banner_img_url} />
            )}
          />
        </BannerView>
        <TituloRestaurantes>Restaurantes</TituloRestaurantes>
        <ViewRestaurantes>
          <RestaurantesList 
            data={restaurantes}
            keyExtrator={(item) => item.id.toString()}
            renderItem={({item}) => (
              <RestauranteItem 
                foto={item.url_img}
                nome={item.nome}
                nota={item.nota}
                categoria={item.categoria}
                distancia={item.distancia}
                valorFrete={item.valor_frete}
                tempoEntrega={item.tempo_entrega}               
              />
            )}
          />
        </ViewRestaurantes>
      </ViewPrincipal>
    )
  }

  return (
    <>
      <StatusBar style="theme-dark" />
      <SafeAreaView>
        {loaded
          ?
          (
            <ViewHome />
          )
          :
          (
            <ViewActivity >
              <ActivityIndicator color="#F0001A" size="large" />
              <Text>Carregando dados aguarde...{loaded}</Text>
            </ViewActivity>
          )}
      </SafeAreaView>
    </>
  );
}