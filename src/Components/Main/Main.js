import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Shop from './Shop/Shop';
import Menu from './Menu';
import Drawer from 'react-native-drawer';
import profileImage from '../../../images/temp/profile.png';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import AsyncStorageToken from '../../../src/AsyncStorage/AsyncStorageToken';
import getAsyncStorage from '../../../src/AsyncStorage/getAsyncStorage';
import AsyncStorage from '@react-native-community/async-storage';
var temp =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6IlZpZW5AZ21haWwuY29tIiwiaWF0IjoxNTk2OTY1Mjk5LCJleHBpcmUiOjE1OTcxMzgwOTl9.b5ZTovbZlJkTQSK5HuqttO5mEKsTSEysJ6ky9zvOtL8';
const GetToken = async (token) => {
  const value = await AsyncStorage.setItem('@token', token);
  if (value !== null) {
    temp = value;
  } else {
    temp = '';
  }
};

const Main = (props) => {
  GetToken();
  const navigation = useNavigation();
  const [valueMenu, setvalueMenu] = useState(true);
  const [value, setvalue] = React.useState();
  const closeControlPanel = () => {
    value.close();
  };
  const openControlPanel = () => {
    value.open();
  };
  const logout = () => {
    props.dispatch({
      type: 'setValueLogOut',
      name: '',
      email: '',
      address: '',
      phone: '',
    });
  };
  const logOut = (
    <View style={{paddingTop: 140}}>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate('Authentication', LoginSuccess)}>
        <Text style={styles.Text}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
  const logIn = (
    <View style={{paddingTop: 10, alignItems: 'center'}}>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate('Orderhistory')}>
        <Text style={styles.Text}>Order History</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate('ChangeInfor')}>
        <Text style={styles.Text}>Change Infor</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Button} onPress={logout}>
        <Text style={styles.Text}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
  const LoginSuccess = () => {
    setvalueMenu(false);
  };
  const main = props.myValue ? logOut : logIn;
  AsyncStorageToken(props.arrayInfor.token);
  return (
    <View style={{flex: 1}}>
      <Drawer
        tapToClose={true}
        openDrawerOffset={0.2}
        ref={(ref) => setvalue(ref)}
        content={
          <View style={styles.wrapper}>
            <Image source={profileImage} style={styles.ImageStyle}></Image>
            {props.arrayInfor.map((e) => (
              <Text style={styles.textUSer}>{e.name}</Text>
            ))}

            {main}
          </View>
        }>
        <Shop open={openControlPanel.bind(this)}></Shop>
      </Drawer>
    </View>
  );
};
function mapStateToProps(state) {
  return {myValue: state.value, arrayInfor: state.arrayInfor};
}
export default connect(mapStateToProps)(Main);
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#088A68',
    borderRightWidth: 4,
    borderColor: 'white',
    alignItems: 'center',
    paddingTop: 30,
  },
  ImageStyle: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  Button: {
    height: 50,
    width: 250,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginBottom: 20,
  },
  Text: {
    fontSize: 18,
    fontFamily: 'monospace',
    color: '#088A68',
  },
  textUSer: {
    fontSize: 15,
    fontFamily: 'monospace',
    color: 'white',
    paddingTop: 15,
    paddingBottom: 100,
  },
});
