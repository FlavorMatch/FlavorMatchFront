import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({onPress, children, style}) => {
    return (
    <TouchableOpacity
        style={style != null ? style : styles.button}
        onPress={onPress}
    >
        <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
)};

export default Button;

const styles = StyleSheet.create({
    button: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#AF660D",
      padding: 10,
      height: 40,
      borderRadius: 5,
      marginHorizontal: 115,
      marginVertical: 10,
    }, 
    text: {
      fontSize: 16,
      color: '#FFBD59',
    }
});