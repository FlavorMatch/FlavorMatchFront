import React from 'react';
import Input from './input';
import Button from './button';
import img from '../../assets/logo_img.png';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

function Navbar({ navigation }) {
  const [value, onChangeText] = React.useState('');

  function getIdByName() {
    return fetch(`https://flavormatch.herokuapp.com/flavorsByName?name=${value}`, {
      method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJson) => {
      navigation.navigate('Options', {
        responseJson
      })
      onChangeText('');
    })
    .catch((error) => {
    })
  }

  return (
    <View style={styles.base}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.wrapper}>
        <Image
          style={styles.logo}
          source={img}
        />
      </TouchableOpacity>
      <Input 
          style={styles.input}             
          onChangeText={text => onChangeText(text)}
          value={value}
          placeholder='Type here to search:'
          placeholderTextColor="#AF660D" 
      />
      <Button style={styles.button} onPress={getIdByName}><Text>Go</Text></Button>
    </View>
  )
};

const styles = StyleSheet.create({
  base:{
    backgroundColor: '#e4cea9',
    padding: 6,
    paddingTop: 20,
    paddingBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#AF660D',
    borderStyle: 'dashed',
    borderWidth: 2,
    borderRadius: 1,
  },
  button: {
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#AF660D",
    height: 25,
    borderRadius: 5,
  },
  input: {
    width: '75%',
    marginRight: 10,
    height: 25, 
    paddingLeft: 7,
    borderRadius: 5,
    backgroundColor: '#FFBD59',
    fontSize: 12,
    color: '#AF660D',
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 35,
    height: 35,
    marginRight: 15,
    marginLeft: 5,
  }
});

export default Navbar;