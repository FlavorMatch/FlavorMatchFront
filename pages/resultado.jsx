import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text } from 'react-native';
import Navbar from '../common/components/navbar';

const Separator = () => (
  <View style={styles.separator} />
);

export default function Opcoes({ route}) {
  const { responseJson } = route.params;

  return (
    <SafeAreaView style={styles.base}>
      <Navbar></Navbar>
      {responseJson.map((flavor, index) => (
        <View style={styles.container} key={index}>
          <Text>{flavor.name}</Text>
          <Separator />
        </View>
      ))}
    </SafeAreaView>
)};

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: '#A2EEEB',
  },
  container: {
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});