import React from 'react';
import { StyleSheet, ImageBackground, Image, View, SafeAreaView, Text } from 'react-native';
import img from '../assets/logo.png';
import imgBG from '../assets/home.jpg';
import Input from '../common/components/input';
import Button from '../common/components/button';

export default function HomeScreen({ navigation }) {
  const [value, onChangeText] = React.useState('');

  function getIdByName() {
    return fetch(`http://localhost:3000/flavorsByName?name=${value}`, {
      method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      navigation.navigate('Opcoes', {
        responseJson
      })
    })
    .catch((error) => {
        console.error(error);
    })
  }
  
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
          <Button
            onPress={getIdByName}
          >
            Search
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
  }
});