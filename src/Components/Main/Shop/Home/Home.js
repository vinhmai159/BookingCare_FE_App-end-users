import {View, Text, ScrollView} from 'react-native';
import React, {Component} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DoctorDetail from '../Detail/DoctorDetail';
import ScheduleDetail from '../Detail/ScheduleDetail';
import HomeScreen from './HomeScreen';
import postDetail from './postDetail';
const Stack = createStackNavigator();

const Home: () => React$Node = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DoctorDetail" component={DoctorDetail} />
        <Stack.Screen name="ScheduleDetail" component={ScheduleDetail} />
        <Stack.Screen name="ListPosts" component={postDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Home;
