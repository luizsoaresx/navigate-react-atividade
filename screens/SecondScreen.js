import React from 'react';
import { Button, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function GoToSecondScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
      <Text style={{ fontSize:18, marginBottom:20 }}>Tela Secundária</Text>
      <Text style={{ fontSize:18, marginBottom:20 }}>Esse é um texto de teste</Text>
      <Button title="Voltar para tela principal" onPress={() => navigation.goBack()} color= "#04DC74"/>
    </SafeAreaView>
  );
}