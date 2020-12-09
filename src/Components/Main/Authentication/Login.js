import React from 'react';

import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import setDataLogin from '../../../AsyncStorage/SaveDataLogin';

const Login = (props) => {
  const navigation = useNavigation();
  const handleLogOut = () => {
    props.dispatch({
      type: 'setDataLogin',
      data: {
        accessToken: '',
        email: '',
        address: '',
        gender: '',
        birthday: '',
        fistName: '',
        lastName: '',
        role: '',
        createAt: '',
        updateAt: '',
      },
    });
    console.log('LogOut');
    props.dispatch({
      type: 'setLogout',
    });
    setDataLogin('');
  };

  return (
    <View style={{paddingTop: 100, alignItems: 'center'}}>
      <TouchableOpacity style={styles.Button}>
        <Text style={styles.Text}>A</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate('ChangeInfor')}>
        <Text style={styles.Text}>B</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Button} onPress={handleLogOut}>
        <Text style={styles.Text}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
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
    color: 'black',
  },
});
function mapStateToProps(state) {
  return {
    dataCheckLoginSuccess: state.dataCheckLoginSuccess,
    dataLogin: state.dataLogin,
  };
}
export default connect(mapStateToProps)(Login);
