import {View, Text, ScrollView} from 'react-native';
import React, {Component} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ListProduct from '../ListProductDetail/ListProduct';

import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

const Home: () => React$Node = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ListProduct" component={ListProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Home;
