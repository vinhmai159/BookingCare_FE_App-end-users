import {View, Text, ScrollView} from 'react-native';
import React, {Component} from 'react';
import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ListProduct from '../ListProductDetail/ListProduct';
import ProductDetail from '../ListProductDetail/ProductDetail';
import HomeScreen from './HomeScreen';
import Cart from '../Cart/Cart';

const Stack = createStackNavigator();

const Home: () => React$Node = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ListProduct" component={ListProduct} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Home;
