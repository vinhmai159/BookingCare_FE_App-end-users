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
import ContactView from './ContactView';
import COntactUpdates from './ContactUpdate';

const Stack = createStackNavigator();
const Contact = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="ContactView" component={ContactView} />
        <Stack.Screen name="COntactUpdates" component={COntactUpdates} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Contact;
