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
import profileImage from '../../../images/temp/profile.png';
import {useNavigation} from '@react-navigation/native';
import Login from './Authentication/Login';
import Logout from './Authentication/Logout';

const Main = (props) => {
  const navigation = useNavigation();

  const [value, setvalue] = React.useState();
  const [ValueLogin, setValueLogin] = useState(true);
  const closeControlPanel = () => {
    value.close();
  };
  const openControlPanel = () => {
    value.open();
  };

  const main = ValueLogin ? <Login /> : <Logout />;

  return (
    <View style={{flex: 1}}>
      <Drawer
        tapToClose={true}
        openDrawerOffset={0.2}
        ref={(ref) => setvalue(ref)}
        content={
          <View style={styles.wrapper}>
            <Image source={profileImage} style={styles.ImageStyle}></Image>

            {main}
          </View>
        }>
        <Shop open={openControlPanel.bind(this)}></Shop>
      </Drawer>
    </View>
  );
};

export default Main;
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
