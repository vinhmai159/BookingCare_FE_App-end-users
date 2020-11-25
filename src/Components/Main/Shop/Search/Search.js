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
import DoctorDetail from '../Detail/DoctorDetail';
import ScheduleDetail from '../Detail/ScheduleDetail';

import SearchView from './SearchView';

const Stack = createStackNavigator();
const Search = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SearchView" component={SearchView} />
        <Stack.Screen name="DoctorDetail" component={DoctorDetail} />
        <Stack.Screen name="ScheduleDetail" component={ScheduleDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Search;
