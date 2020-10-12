import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import React, {Component, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ListProduct from '../ListProductDetail/ListProduct';

import SearchView from './SearchView';

const Stack = createStackNavigator();
const Search = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Cart" component={SearchView} />
        <Stack.Screen name="ListProduct" component={ListProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Search;
