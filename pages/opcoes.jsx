import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, ImageBackground, View, SafeAreaView, Text } from 'react-native';
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
      navigation.navigate('GenericError', {
        error
      })
    })
  }
  
  return (
    <SafeAreaView style={styles.base}>
      <Navbar navigation={navigation} />
      <ImageBackground
          style={styles.backgroundImage}
          source={imgBG}
          >
          <ScrollView>
          <Text style={styles.text}>Choose the best ingredient</Text>
          {responseJson.map((flavor, index) => (
            <View style={styles.container} key={index}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => getListById(flavor.id, flavor.name)}
              >
                <Text style={styles.text}>{index + 1}) {flavor.name}</Text>
              </TouchableOpacity>
              <Separator />
            </View>
          ))}
        </ScrollView>
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