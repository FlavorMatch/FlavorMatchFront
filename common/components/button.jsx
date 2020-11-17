import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

const Button = ({onPress, children}) => {
    return (
    <TouchableOpacity
        style={styles.button}
        onPress={onPress}
    >
        {children}
    </TouchableOpacity>
)};

export default Button;

const styles = StyleSheet.create({
    button: {
      alignItems: "center",
      justifyContent: "center",
      boxShadow: '0px 2px 2px #A99CC8',
      backgroundColor: "#AF660D",
      padding: 10,
      height: 40,
      borderRadius: '5px',
      marginHorizontal: '115px',
      marginVertical: '10px',
    },
});