/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Authentication from './src/Components/Authentication/Authentication';
import ChangeInfor from './src/Components/ChangeInfor/ChangInfor';
import Main from './src/Components/Main/Main';
import Orderhistory from './src/Components/Orderhistory/Orderhistory';
import Menu from './src/Components/Main/Menu';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {View} from 'react-native';
import GetCart from './src/AsyncStorage/GetCart';
import saverCarts from './src/AsyncStorage/AsyncStorage';
import AsyncStorage from '@react-native-community/async-storage';

const Stack = createStackNavigator();
GetCart();
const defaultState = {
  cartArray: [],
  price: 1,
  search: 'flor',
  arrayInfor: [
    {
      name: '',
      email: '',
      address: '',
      phone: '',
      token: '',
    },
  ],
  value: true,
};

const reducer = (state = defaultState, action) => {
  if (action.type === 'ADD_Cart') {
    saverCarts(state.cartArray);
    return {
      ...state,
      cartArray: state.cartArray.concat([
        {
          id: action.id,
          name: action.name,
          price: action.price,
          image: action.image,
          sum: action.sum,
        },
      ]),
    };
  }
  if (action.type === 'increase') {
    return {
      cartArray: state.cartArray.map((e) => {
        if (e.id !== action.id) return e;
        return {...state, sum: 1};
      }),
    };
  }
  if (action.type === 'reduction') {
    return {
      ...state,
      sum: state.cartArray.sum - 1,
    };
  }
  if (action.type === 'setValue') {
    return {
      ...state,
      value: false,
      arrayInfor: [
        {
          name: action.name,
          email: action.email,
          address: action.address,
          phone: action.phone,
          token: action.token,
        },
      ],
    };
  }
  if (action.type === 'setValueLogOut') {
    return {
      ...state,
      value: true,
      arrayInfor: [
        {
          name: action.name,
          email: action.email,
          address: action.address,
          phone: action.phone,
        },
      ],
    };
  }
  if (action.type === 'ChangInfor') {
    return {
      ...state,
      value: false,
      arrayInfor: [
        {
          name: action.name,
          email: action.email,
          address: action.address,
          phone: action.phone,
          token: action.token,
        },
      ],
    };
  }
  if (action.type === 'Search') {
    return {
      ...state,
      search: action.key,
    };
  }

  return state;
};
const store = createStore(reducer);
const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Main} />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="Authentication" component={Authentication} />
          <Stack.Screen name="ChangeInfor" component={ChangeInfor} />
          <Stack.Screen name="Orderhistory" component={Orderhistory} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
