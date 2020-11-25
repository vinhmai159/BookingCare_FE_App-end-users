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
import icLogo from '../../../image/back.png';
import icMenu from '../../../image/menu.png';
import {useNavigation} from '@react-navigation/native';
import FormLogin from './FormLogin';
import FormRegister from './FormRegister';
import {connect} from 'react-redux';
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
  const {dataCheckLoginRe} = props;
  const setValue2 = () => {
    props.dispatch({
      type: 'setRegister',
    });
  };
  const main = dataCheckLoginRe ? <FormLogin /> : <FormRegister />;
  const setValue1 = () => {
    props.dispatch({
      type: 'setLogin',
    });
  };

  return (
    <View style={styles.wrapper}>
      <View
        style={{
          height: height / 8,
          backgroundColor: '#FEB04A',
          padding: 13,
        }}>
        <View style={styles.wrapper1}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={icLogo} style={styles.iconStyle}></Image>
          </TouchableOpacity>
          <Text style={styles.textStyle}>BOOKING CARE</Text>
          <View style={styles.iconStyle}></View>
        </View>
        <View style={styles.wrapper2}></View>
      </View>
      {main}
      <View style={styles.wrapperSectionButton}>
        <TouchableOpacity style={styles.SectionButton} onPress={setValue1}>
          <Text style={dataCheckLoginRe ? styles.Text : styles.Text2}>
            SIGN IN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.SectionButton2} onPress={setValue2}>
          <Text style={!dataCheckLoginRe ? styles.Text : styles.Text2}>
            SIGN UP
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
function mapStateToProps(state) {
  return {
    dataCheckLoginRe: state.dataCheckLoginRe,
  };
}
export default connect(mapStateToProps)(Authentication);

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 10,
    flex: 1,
    backgroundColor: '#FEB04A',
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
    color: 'black',
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
    color: 'black',
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
