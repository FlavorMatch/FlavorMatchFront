import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Result from './pages/result';
import HomeScreen from './pages';
import Options from './pages/options';
import GenericError from './pages/genericError';

const Stack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator   
        screenOptions={{
          headerShown: false
        }} 
        initialRouteName="HomeScreen"
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />
        <Stack.Screen 
          name="Result" 
          component={Result} 
          options={{
            transitionSpec: {
              open: config,
              close: config,
            },
          }}  
        />
        <Stack.Screen 
          name="Options" 
          component={Options} 
          options={{
            transitionSpec: {
              open: config,
              close: config,
            },
          }}  
        />
        <Stack.Screen 
          name="GenericError" 
          component={GenericError} 
          options={{
            transitionSpec: {
              open: config,
              close: config,
            },
          }}  
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
