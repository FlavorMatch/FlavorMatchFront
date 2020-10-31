import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, TextInput, Text } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

export default function Scaffold({ navigation }) {
 
  return (
    <SafeAreaView style={styles.base}>
      <View style={styles.container}>
        <Text style={styles.title}>Scaffold</Text>
        <Button
          title="Press me - Resultado"
          color="#27B46E"
          onPress={() => navigation.navigate('Resultado')}
        />
        <Separator />
        <Button
          title="Press me - Home"
          color="#EDC02C"
          onPress={() => navigation.navigate('Home')}
        />
        <Separator />
        <Button
          title="Press me - Opcoes"
          color="#F3E2B5"
          onPress={() => navigation.navigate('Opcoes')}
        />
      </View>
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
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
});