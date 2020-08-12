import React, {Component, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import backSpecial from '../../../images/appIcon/backs.png';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
const ChangeInfor = (props) => {
  const {txtName, settxtName} = useState('Mai The Vien');
  const {txtAddress, settxtAddress} = useState('09 Lac Long Quan - Da Nang');
  const {txtPhone, settxtPhone} = useState('0869040015');
  const [name, setname] = useState('');
  const [address, setaddress] = useState('');
  const [phone, setphone] = useState('');
  const navigation = useNavigation();
  var value = '';
  {
    props.arrayInfor.map((e) => (value = e.token));
  }
  const Change = () => {
    fetch('http://192.168.1.31/WebService/app/change_info.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: value,
        //   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6IlZpZW5AZ21haWwuY29tIiwiaWF0IjoxNTk2OTY1Mjk5LCJleHBpcmUiOjE1OTcxMzgwOTl9.b5ZTovbZlJkTQSK5HuqttO5mEKsTSEysJ6ky9zvOtL8',
        name: name,
        phone: phone,
        address: address,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        props.dispatch({
          type: 'ChangInfor',
          name: json.name,
          email: json.email,
          address: json.address,
          phone: json.phone,
          token: props.arrayInfor.token,
        });
        navigation.goBack();
      })
      .catch((error) => {
        console.error(error);
      });
  };
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

  return (
    <View style={wrapper}>
      <View style={header}>
        <View />
        <Text style={headerTitle}>User Infomation</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={backSpecial} style={backIconStyle} />
        </TouchableOpacity>
      </View>
      <View style={body}>
        <TextInput
          style={textInput}
          placeholder="Enter your name"
          autoCapitalize="none"
          onChangeText={(text) => setname(text)}
          value={name}
        />
        <TextInput
          style={textInput}
          placeholder="Enter your address"
          autoCapitalize="none"
          onChangeText={(text) => setaddress(text)}
          value={address}
        />
        <TextInput
          style={textInput}
          placeholder="Enter your phone number"
          autoCapitalize="none"
          onChangeText={(text) => setphone(text)}
          value={phone}
        />
        <TouchableOpacity style={signInContainer} onPress={Change}>
          <Text style={signInTextStyle}>CHANGE YOUR INFOMATION</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {flex: 1, backgroundColor: '#fff'},
  header: {
    flex: 1,
    backgroundColor: '#2ABB9C',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
  }, // eslint-disable-line
  headerTitle: {fontFamily: 'Avenir', color: '#fff', fontSize: 20},
  backIconStyle: {width: 30, height: 30},
  body: {flex: 10, backgroundColor: '#F6F6F6', justifyContent: 'center'},
  textInput: {
    height: 45,
    marginHorizontal: 20,
    backgroundColor: '#FFFFFF',
    fontFamily: 'Avenir',
    paddingLeft: 20,
    borderRadius: 20,
    marginBottom: 20,
    borderColor: '#2ABB9C',
    borderWidth: 1,
  },
  signInTextStyle: {
    color: '#FFF',
    fontFamily: 'Avenir',
    fontWeight: '600',
    paddingHorizontal: 20,
  },
  signInContainer: {
    marginHorizontal: 20,
    backgroundColor: '#2ABB9C',
    borderRadius: 20,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  signInStyle: {
    flex: 3,
    marginTop: 50,
  },
});
function mapStateToProps(state) {
  return {arrayInfor: state.arrayInfor};
}
export default connect(mapStateToProps)(ChangeInfor);
