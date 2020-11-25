import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Authentication from './Authentication/Authentication';
import ChangeInfor from './ChangeInfor/ChangInfor';
import Main from './Main/Main';
import Orderhistory from './Orderhistory/Orderhistory';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import GetListDoctorAPI from '../API/Doctor/get-list-doctor-api';
const Stack = createStackNavigator();

const Index = (props) => {
  useEffect(() => {
    async function getDataLogin() {
      GetListDoctorAPI()
        .then((json) => {
          var data = JSON.parse(JSON.stringify(json));
          console.log(data);
          props.dispatch({
            type: 'setListDocter',
            data: data,
          });
        })
        .catch((error) => {
          console.error(error);
        });
      var value = await AsyncStorage.getItem('@save');
      value = JSON.parse(value);
      if (value !== null) {
        console.log(value);
        props.dispatch({
          type: 'setDataLogin',
          data: value,
        });
      }
    }
    getDataLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Main} />
        <Stack.Screen name="Authentication" component={Authentication} />
        <Stack.Screen name="ChangeInfor" component={ChangeInfor} />
        <Stack.Screen name="Orderhistory" component={Orderhistory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function mapStateToProps(state) {
  return {
    dataCheckLoginSuccess: state.dataCheckLoginSuccess,
    dataLogin: state.dataLogin,
  };
}
export default connect(mapStateToProps)(Index);
