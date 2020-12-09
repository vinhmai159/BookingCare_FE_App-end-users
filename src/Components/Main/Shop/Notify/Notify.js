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
import DoctorDetail from '../Detail/DoctorDetail';

import NotifyView from './NotifyView';

const Stack = createStackNavigator();
const Notify = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Cart" component={NotifyView} />
        <Stack.Screen name="DoctorDetail" component={DoctorDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Notify;
