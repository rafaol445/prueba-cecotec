

import React from 'react';
import {
  Button,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const pilaNavegacion = createStackNavigator();

import DetailScreen from './screens/detailsScreen';
import InicioScreen from './screens/inicioScreen';


const App = () => {

  return (
    <NavigationContainer>
      <pilaNavegacion.Navigator>
        <pilaNavegacion.Screen options={{ headerShown: false }} name="Inicio" component={InicioScreen} />
        <pilaNavegacion.Screen options={{ headerShown: false }} name="Details" component={DetailScreen} />
      </pilaNavegacion.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
