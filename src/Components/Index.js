import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ChangeInfor from './ChangeInfor/ChangInfor';
import Main from './Main/Main';
import Orderhistory from './Orderhistory/Orderhistory';

const Stack = createStackNavigator();

const Index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Main} />
        <Stack.Screen name="ChangeInfor" component={ChangeInfor} />
        <Stack.Screen name="Orderhistory" component={Orderhistory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;
