import React from 'react';
import styled from 'styled-components';
import Input from './input';
import Button from './button';
import img from '../../assets/logo_img.png';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

const Container = styled.div`
  background: #e4cea9;
  padding: 6px; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 5px solid #AF660D;
  border-bottom-style: double;
`
function Navbar({ navigation }) {
  const [value, onChangeText] = React.useState('');

  function getIdByName() {
    return fetch(`https://flavormatch.herokuapp.com/flavorsByName?name=${value}`, {
      method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      navigation.navigate('Opcoes', {
        responseJson
      })
      onChangeText('');
    })
    .catch((error) => {
        console.error(error);
    })
  }

  return (
    <Container>
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
      <Button style={styles.button} onPress={getIdByName}>Go</Button>
    </Container>
  )
};

const styles = StyleSheet.create({
  button: {
    padding: '5px',
    alignItems: "center",
    justifyContent: "center",
    boxShadow: '0px 2px 2px #816a5b',
    backgroundColor: "#AF660D",
    height: 25,
    borderRadius: '5px',
  },
  input: {
    width: '100vh',
    marginRight: '10px',
    height: 25, 
    paddingLeft: '7px',
    boxShadow: '0px 2px 2px #816a5b',
    borderRadius: '5px',
    backgroundColor: '#FFBD59',
    fontSize: 12,
    fontFamily: "Purisa",
    color: '#AF660D',
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 35,
    height: 35,
    marginRight: '15px',
    marginLeft: '5px',
  }
});

export default Navbar;