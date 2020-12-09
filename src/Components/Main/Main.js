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

import Drawer from 'react-native-drawer';
import profileImage from '../../../image/icons8-user-male-104.png';
import {useNavigation} from '@react-navigation/native';
import Login from './Authentication/Login';
import Logout from './Authentication/Logout';
import {connect} from 'react-redux';
// import GetDataLogin from '../../AsyncStorage/GetDataLogin';
import AsyncStorage from '@react-native-community/async-storage';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const Main = (props) => {
  const navigation = useNavigation();
  const [value, setvalue] = React.useState();
  const [ValueLogin, setValueLogin] = useState(false);
  const {dataCheckLoginSuccess} = props;

  const closeControlPanel = () => {
    value.close();
  };
  const openControlPanel = () => {
    value.open();
  };
  const [dataUser, setDataUser] = useState({});

  useEffect(() => {
    dataTemp();
  });
  const dataTemp = () => {
    if (props.dataLogin.accessToken) {
      props.dispatch({
        type: 'setLoginSuccess',
      });
    } else {
      props.dispatch({
        type: 'setLogout',
      });
    }
  };
  const main = dataCheckLoginSuccess ? <Login /> : <Logout />;

  return (
    <View style={{flex: 1}}>
      <Drawer
        tapToClose={true}
        openDrawerOffset={0.2}
        ref={(ref) => setvalue(ref)}
        content={
          <View style={styles.wrapper}>
            <TouchableOpacity onPress={dataTemp}>
              <Image source={profileImage} style={styles.ImageStyle}></Image>
            </TouchableOpacity>
            <Text style={styles.textUSer}>
              Hello {props.dataLogin.fistName}
            </Text>
            {main}
          </View>
        }>
        <Shop open={openControlPanel.bind(this)}></Shop>
      </Drawer>
    </View>
  );
};
function mapStateToProps(state) {
  return {
    dataCheckLoginSuccess: state.dataCheckLoginSuccess,
    dataLogin: state.dataLogin,
  };
}
export default connect(mapStateToProps)(Main);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FEB04A',
    borderRightWidth: 4,
    borderColor: 'white',
    alignItems: 'center',
    paddingTop: 30,
  },
  ImageStyle: {
    height: 150,
    width: 150,
    borderRadius: 50,
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
    color: 'black',
    paddingTop: 15,
    paddingBottom: 100,
  },
});
