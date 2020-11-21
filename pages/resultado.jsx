import React, { useEffect } from 'react';
import 'react-navigation';
import { StyleSheet, Image, View, SafeAreaView, Text } from 'react-native';
import Navbar from '../common/components/navbar';

const Separator = () => (
  <View style={styles.separator} />
);

export default function Opcoes({ route, navigation }) {
  const { responseJson } = route.params;
  const [imageApi, setImageApi] = React.useState([]);

  async function fetchImage(){
    try {
      const resJson = await fetch(`https://pixabay.com/api/?key=19158008-457b3cd5d23b9bb8303efa14d&q=to+eat+${route.params.name}&image_type=photo`);
      const res = await resJson.json();
      setImageApi(res.hits[0].previewURL);
    } catch (error) {
      console.warn(error);
    }
  }

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <SafeAreaView style={styles.base}>
      <Navbar navigation={navigation} /> 
      <View style={styles.wrapper}>   
        <Image
          resizeMode={"cover"}
          style={styles.image}
          source={{uri: imageApi}}
        />
      </View>
      {responseJson.map((flavor, index) => (
        <View style={styles.container} key={index}>
          <Text style={styles.text}>{flavor.name}</Text>
          <Separator />
        </View>
      ))}
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
  separator: {
    marginVertical: 8,
    borderBottomColor: '#e4cea9',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  image: {
    width: 150,
    height: 150,    
    marginBottom: 5,
    marginTop: '20px',
    borderRadius: '50%',
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%'
  },
  text: {
    marginVertical: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#AF660D',
    fontFamily: "Purisa",
    textAlign: 'center',
  },
});