import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView, Image, View } from './styles';
import user from '../../assets/euzinho.png';


export default function Perfil() {
  return (
    <>
      <StatusBar style="theme-dark" />
      <SafeAreaView>
        <View>
          <Image source={user}/>
          <Text style={{fontSize: 20, marginBottom: 10}}>Luiz Marcelo</Text>
          <Text style={{fontSize: 20, color: 'gray'}}>Rua: São Caetano Nº 123</Text>
          <Text style={{fontSize: 20, color: 'gray'}}>Saldo: R$200,00</Text>
        </View>
      </SafeAreaView>
    </>
  );
}