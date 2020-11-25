import React, {Component, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ChangeInfor = (props) => {
  const {txtName, settxtName} = useState('Mai The Vien');
  const {txtAddress, settxtAddress} = useState('09 Lac Long Quan - Da Nang');
  const {txtPhone, settxtPhone} = useState('0869040015');
  const [name, setname] = useState('');
  const [address, setaddress] = useState('');
  const [phone, setphone] = useState('');
  const navigation = useNavigation();
  var value = '';

  const {
    wrapper,
    header,
    headerTitle,
    backIconStyle,
    body,
    signInContainer,
    signInTextStyle,
    textInput,
  } = styles;

  return <View style={wrapper}></View>;
};

const styles = StyleSheet.create({
  wrapper: {flex: 1, backgroundColor: 'red'},
});

export default ChangeInfor;
