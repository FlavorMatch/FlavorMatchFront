import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Button, View, SafeAreaView, TextInput, Text } from 'react-native';
import Resultado from './pages/resultado';

const Separator = () => (
  <View style={styles.separator} />
);

function HomeScreen({ navigation }) {
  const [value, onChangeText] = React.useState('');
 
  return (
    <SafeAreaView style={styles.base}>
      <View style={styles.container}>
        <Text style={styles.title}>Flavor Match</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => onChangeText(text)}
          value={value}
          placeholder='Digite seu ingrediente:'
          />
        <Button
          title="Press me"
          color="#f194ff"
          onPress={() => navigation.navigate('Resultado')}
        />
      </View>
      <Separator />
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Resultado" component={Resultado} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: '#DFC9E2',
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
  },
  input: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    marginBottom: '5px'
  }
});

export default App;
