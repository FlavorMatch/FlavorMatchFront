import React from 'react';
import 'react-navigation';
import { StyleSheet, View, Image, ScrollView, SafeAreaView, Text } from 'react-native';
import Navbar from '../common/components/navbar';
import img from '../assets/warning.png';

export default function GenericError({ navigation }) {

  return (
    <SafeAreaView style={styles.base}>
      <Navbar navigation={navigation} /> 
      <ScrollView>
        <View style={styles.wrapper}>   
          <Image
            resizeMode={"cover"}
            style={styles.image}
            source={img}
          />
        </View>
        <View style={styles.wrapper}>   
          <Text style={styles.text}>
              Sorry! 
          </Text>
          <Text style={styles.text}>
              Something went wrong at our end.
              Don't worry, it's not you - it's us.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
)};

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: '#f8f0cb',
  },
  container: {
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  text: {
    marginVertical: 10,
    marginHorizontal: 50,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#AF660D',
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,    
    marginBottom: 55,
    marginTop: 30,
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50
  },
});