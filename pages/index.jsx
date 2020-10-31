import React from 'react';
import { StyleSheet, TouchableOpacity, Image, View, SafeAreaView, TextInput, Text } from 'react-native';
import img from '../assets/logo.svg';


const Separator = () => (
  <View style={styles.separator} />
);

export default function HomeScreen({ navigation }) {
  const [value, onChangeText] = React.useState('');
 
  return (
    <SafeAreaView style={styles.base}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Image
            style={styles.logo}
            source={img}
          />
        </View>
        <TextInput
          style={styles.input}
          onChangeText={text => onChangeText(text)}
          value={value}
          placeholder='Digite seu ingrediente:'
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Opcoes')}
        >
          <Text>Press Here</Text>
        </TouchableOpacity>
      </View>
      <Separator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: '#A2EEEB',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  input: {
    height: 40, 
    paddingLeft: '10px',
    boxShadow: '0px 4px 4px #A99CC8',
    borderRadius: '10px',
    marginBottom: '10px',
    marginHorizontal: '20px',
    backgroundColor: '#EDC02C'
  },
  logo: {
    width: 250,
    height: 250,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#F03613",
    padding: 10,
    borderRadius: '10px',
    marginHorizontal: '60px',
    marginVertical: '30px',
  },
});