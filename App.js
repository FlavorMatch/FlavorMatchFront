import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Resultado from './pages/resultado';
import HomeScreen from './pages';
import Scaffold from './pages/scaffold';
import Opcoes from './pages/opcoes';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Scaffold">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Resultado" component={Resultado} />
        <Stack.Screen name="Opcoes" component={Opcoes} />
        <Stack.Screen name="Scaffold" component={Scaffold} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
