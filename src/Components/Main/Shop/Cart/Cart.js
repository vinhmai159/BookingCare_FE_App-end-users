import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import React, {Component, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ListProduct from '../ListProductDetail/ListProduct';

import CartView from './CartView';

const Stack = createStackNavigator();
const Cart = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Cart" component={CartView} />
        <Stack.Screen name="ListProduct" component={ListProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Cart;
