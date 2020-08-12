import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
  Alert,
} from 'react-native';
import icLogo from '../../../images/appIcon/ic_logo.png';
import icMenu from '../../../images/appIcon/back.png';
import Register from '../../API/Register';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import AsyncStorageToken from '../../AsyncStorage/AsyncStorageToken';
import getAsyncStorage from '../../AsyncStorage/getAsyncStorage';
const {height} = Dimensions.get('window');
const Authentication = (props) => {
  const navigation = useNavigation();
  const [valueMenu, setvalueMenu] = useState(true);
  const [tk, settk] = useState('');
  const [email, setemail] = useState('');
  const [mk, setmk] = useState('');
  const [emailLogin, setemailLogin] = useState('');
  const [mkLogin, setmkLogin] = useState('');
  const [mk2, setmk2] = useState('');
  const temp = '';
  const signUp = () => {
    fetch('http://192.168.1.31/WebService/app/login.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailLogin,
        password: mkLogin,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        LoginOnSuccess();
        // route.params.LoginSuccess;
        console.log(json.user);
        // AsyncStorageToken('json.token');
        props.dispatch({
          type: 'setValue',
          name: json.user.name,
          email: json.user.email,
          address: json.user.address,
          phone: json.user.phone,
          token: json.token,
        });
        navigation.goBack();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const registers = () => {
    fetch('http://192.168.1.31/WebService/app/register.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        name: tk,
        password: mk,
      }),
    })
      .then((response) => response.text())
      .then((text) => {
        if (text === 'THANH_CONG') {
          onSuccess();
        } else {
          onFail();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const LoginOnSuccess = () => {
    Alert.alert(
      'Notice',
      'Sign Up Successfully',

      [
        {
          text: 'OK',
          onPress: () => console.log('oke'),
        },
      ],
      {cancelable: false},
    );
  };
  const onSuccess = () => {
    Alert.alert(
      'Notice',
      'Sign Up Successfully',

      [
        {
          text: 'OK',
          onPress: () => setvalueMenu(true),
        },
      ],
      {cancelable: false},
    );
  };
  const LoginOnFail = () => {
    Alert.alert(
      'Notice',
      'Sign Up not Successfully',

      [
        {
          text: 'OK',
          onPress: () => console.log('Ask me later pressed'),
        },
      ],
      {cancelable: false},
    );
  };

  const onFail = () => {
    Alert.alert(
      'Notice',
      'Sign Up not Successfully',

      [
        {
          text: 'OK',
          onPress: () => console.log('Ask me later pressed'),
        },
      ],
      {cancelable: false},
    );
  };

  const LogIn = (
    <View style={styles.wrapperInput}>
      <TextInput
        onChangeText={(text) => setemailLogin(text)}
        value={emailLogin}
        style={styles.textInput}
        placeholder="User Name"
      />
      <TextInput
        onChangeText={(text) => setmkLogin(text)}
        value={mkLogin}
        style={styles.textInput}
        placeholder="PassWord"
      />
      <TouchableOpacity style={styles.Button} onPress={signUp}>
        <Text style={styles.Text2}>SIGN IN</Text>
      </TouchableOpacity>
    </View>
  );
  const LogUp = (
    <View style={styles.wrapperInput}>
      <TextInput
        style={styles.textInput}
        placeholder="User Name"
        onChangeText={(text) => settk(text)}
        value={tk}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Your Email"
        onChangeText={(text) => setemail(text)}
        value={email}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Your PassWord"
        onChangeText={(text) => setmk(text)}
        value={mk}
        secureTextEntry
      />
      <TextInput
        style={styles.textInput}
        placeholder="Re-Enter Your PassWord"
        onChangeText={(text) => setmk2(text)}
        value={mk2}
        secureTextEntry
      />
      <TouchableOpacity style={styles.Button} onPress={registers}>
        <Text style={styles.Text2}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  );
  const main = valueMenu ? LogIn : LogUp;
  const setValue1 = () => {
    setvalueMenu(true);
  };
  const setValue2 = () => {
    setvalueMenu(false);
  };

  return (
    <View style={styles.wrapper}>
      <View
        style={{
          height: height / 8,
          backgroundColor: '#088A68',
          padding: 13,
        }}>
        <View style={styles.wrapper1}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={icMenu} style={styles.iconStyle}></Image>
          </TouchableOpacity>
          <Text style={styles.textStyle}>Wearing a Dress</Text>
          <Image source={icLogo} style={styles.iconStyle}></Image>
        </View>
        <View style={styles.wrapper2}></View>
      </View>
      {main}
      <View style={styles.wrapperSectionButton}>
        <TouchableOpacity style={styles.SectionButton} onPress={setValue1}>
          <Text style={valueMenu ? styles.Text : styles.Text2}>SIGN IN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.SectionButton2} onPress={setValue2}>
          <Text style={!valueMenu ? styles.Text : styles.Text2}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default connect()(Authentication);
const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 10,
    flex: 1,
    backgroundColor: '#088A68',
  },
  wrapperInput: {
    height: 300,
    alignItems: 'center',
    paddingTop: 100,
  },
  iconStyle: {
    width: 25,
    height: 25,
  },
  textInput: {
    height: 50,
    width: 366,
    backgroundColor: 'white',
    borderColor: '#808080',
    borderWidth: 1,
    paddingLeft: 20,
    marginBottom: 15,
    fontSize: 13,
    borderRadius: 25,
  },

  wrapper1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapper2: {
    flex: 1,
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    color: 'white',
  },
  Button: {
    height: 50,
    width: 366,
    backgroundColor: 'white',
    borderColor: '#808080',
    borderWidth: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    color: '#BDBDBD',
  },
  Text2: {
    color: '#088A68',
  },
  wrapperSectionButton: {
    paddingTop: 300,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  SectionButton: {
    height: 50,
    width: 180,
    backgroundColor: 'white',
    borderColor: '#808080',
    borderWidth: 1,
    borderTopLeftRadius: 50,

    alignItems: 'center',
    justifyContent: 'center',
  },
  SectionButton2: {
    height: 50,
    width: 180,
    backgroundColor: 'white',
    borderColor: '#808080',
    borderWidth: 1,
    borderTopEndRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
