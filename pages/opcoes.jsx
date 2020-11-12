import React from 'react';
import { StyleSheet, TouchableOpacity, View, SafeAreaView, Text } from 'react-native';
import Navbar from '../common/components/navbar';

const Separator = () => (
  <View style={styles.separator} />
);

export default function Opcoes({ navigation, route}) {
  const { responseJson } = route.params;
  console.log(responseJson);

  function getListById(id) {
    return fetch(`http://localhost:3000/matchById?id=${id}`, {
      method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      navigation.navigate('Resultado', {
        responseJson
      })
    })
    .catch((error) => {
        console.error(error);
    })
  }
  
  return (
    <SafeAreaView style={styles.base}>
      <Navbar></Navbar>
      {responseJson.map((flavor, index) => (
        <View style={styles.container} key={index}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => getListById(flavor.id)}
          >
            <Text >{flavor.name}</Text>
          </TouchableOpacity>
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