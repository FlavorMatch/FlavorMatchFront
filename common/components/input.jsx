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
      marginBottom: 10,
      marginHorizontal: 20,
      paddingLeft: 10,
      borderRadius: 10,
      backgroundColor: '#FFBD59',
      fontSize: 16,
      color: '#AF660D',
    },
});