import React, { useEffect } from 'react';
import { StyleSheet, ImageBackground, Image, View, SafeAreaView, Text } from 'react-native';
import img from '../assets/logo.png';
import imgBG from '../assets/home.jpg';
import Input from '../common/components/input';
import Button from '../common/components/button';

export default function HomeScreen({ navigation }) {
  const [value, onChangeText] = React.useState('');
  const [showAlert, setShowAlert] = React.useState(false);

  function getIdByName() {
    return fetch(`https://flavormatch.herokuapp.com/flavorsByName?name=${value}`, {
      method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJson) => {
      if(responseJson.length){
        navigation.navigate('Options', {
          responseJson
        })
      } else {
        setShowAlert(true);
      }
      onChangeText('');
    })
    .catch((error) => {
      navigation.navigate('GenericError', {
        error
      })
    })
  }
  
  useEffect(() => {
    if(!showAlert){
      let timer = setInterval(() => setShowAlert(false), 5000);

      return () => clearInterval(timer)
    }
  },[]);
  
  return (
    <SafeAreaView style={styles.base}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundImage}
          source={imgBG}
        >
          <View style={styles.wrapper}>
            <Image
              style={styles.logo}
              source={img}
            />
          </View>
          <Input
            onChangeText={text => onChangeText(text)}
            value={value}
            placeholder='Type here to search:'
            placeholderTextColor="#AF660D" 
          />
          {showAlert && <View style={styles.alert}><Text style={styles.textAlert}>Sorry! Not found this ingredient.</Text></View>}
          <Button
            onPress={getIdByName}
          >
            <Text>
              Search
            </Text>
          </Button>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "center"
  },
  logo: {
    width: 250,
    height: 250,
  },
  alert: {
    padding: 15,
    marginHorizontal: 92,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#800000',
  },
  textAlert: {
    color: 'white',
  }
});