import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = ({onChangeText, value, placeholder, placeholderTextColor, style}) => {
    return (
    <TextInput
        style={style != null ? style : styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor} 
    />
)};

export default Input;

const styles = StyleSheet.create({
    input: {
      height: 50, 
      marginBottom: '10px',
      marginHorizontal: '20px',
      paddingLeft: '10px',
      boxShadow: '0px 2px 2px #A99CC8',
      borderRadius: '10px',
      backgroundColor: '#FFBD59',
      fontSize: 16,
      fontFamily: "Purisa",
      color: '#AF660D',
    },
});