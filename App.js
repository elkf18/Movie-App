import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './app/screens/HomeScreen';
import SplashScreen from './app/screens/SplashScreen';
import WatchScreen from './app/screens/WatchScreen';
import MovieScreen from './app/screens/MovieScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="WatchScreen" component={WatchScreen} />
        <Stack.Screen name="MovieScreen" component={MovieScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
