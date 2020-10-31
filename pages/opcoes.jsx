import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text } from 'react-native';
import Navbar from '../common/components/navbar';

const Separator = () => (
  <View style={styles.separator} />
);

export default function Opcoes({ navigation }) {
  return (
    <SafeAreaView style={styles.base}>
      <Navbar></Navbar>
      <View style={styles.container}>
        <Text onPress={() => navigation.navigate('Resultado')}>Opção 1</Text>
        <Separator />
        <Text onPress={() => navigation.navigate('Resultado')}>Opção 2</Text>
        <Separator />
        <Text onPress={() => navigation.navigate('Resultado')}>Opção 3</Text>
      </View>
    </SafeAreaView>
)};

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: '#A2EEEB',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});