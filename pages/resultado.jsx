import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text } from 'react-native';
import Navbar from '../common/components/navbar';

const Separator = () => (
  <View style={styles.separator} />
);

export default function Resultado() {
  return (
    <SafeAreaView style={styles.base}>
      <Navbar></Navbar>
      <View style={styles.container}>
        <Text>Match 1</Text>
        <Separator />
        <Text>Match 2</Text>
        <Separator />
        <Text>Match 3</Text>
        <Separator />
      </View>
      <Separator />
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
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});