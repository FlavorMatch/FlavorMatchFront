import React from 'react';
import { StyleSheet, TouchableOpacity, ImageBackground, View, SafeAreaView, Text } from 'react-native';
import 'react-navigation';
import Navbar from '../common/components/navbar';
import imgBG from '../assets/bg.png';

const Separator = () => (
  <View style={styles.separator} />
);

export default function Opcoes({ navigation, route}) {
  const { responseJson } = route.params;

  function getListById(id, name) {
    return fetch(`https://flavormatch.herokuapp.com/matchById?id=${id}`, {
      method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJson) => {
      navigation.navigate('Resultado', {
        responseJson,
        name
      })
    })
    .catch((error) => {
        console.error(error);
    })
  }
  
  return (
    <SafeAreaView style={styles.base}>
      <Navbar navigation={navigation} />
      <ImageBackground
          style={styles.backgroundImage}
          source={imgBG}
      >
        <Text style={styles.text}>Choose the best ingredient</Text>
        {responseJson.map((flavor, index) => (
          <View style={styles.container} key={index}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => getListById(flavor.id, flavor.name)}
            >
              <Text style={styles.text}>{index + 1}) <u>{flavor.name}</u></Text>
            </TouchableOpacity>
            <Separator />
          </View>
        ))}
      </ImageBackground>
    </SafeAreaView>
)};

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: '#c8b9a8',
  },
  container: {
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  text: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#AF660D',
    fontFamily: "Purisa",
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#e4cea9',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});