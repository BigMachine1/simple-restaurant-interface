import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';

import banner from '../../assets/banner.png';
import Button from '../../components/Button';

import {
  ButtonContainer,
  Image,
  SafeAreaView,
  View
} from './styles';

export default function Home({navigation}) {
  return (
      <>
        <StatusBar style="theme-dark" />
        <SafeAreaView>
          <View>
            <Text style={{fontSize: 25}}>Pedir comida nunca foi tão facil</Text>
            <Image source={banner} />
            <Text style={{fontSize: 25}}>Permitir Localização</Text>
            <Text style={{fontSize: 20}}>Para descobrir restaurantes por perto de você</Text>
          </View>
          <ButtonContainer>
            <Button text="Pular" onPress={() => {}} />
            <Button theme="primary" text="Entrar" onPress={() => {navigation.navigate('Main')}} />
          </ButtonContainer>
        </SafeAreaView>
      </>
  );
}

