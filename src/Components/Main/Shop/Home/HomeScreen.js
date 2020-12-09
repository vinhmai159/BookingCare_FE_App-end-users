import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';

import Category from './Category';
import ListPosts from './ListPosts';
import icSearch from '../../../../../image/Searchh0.png';
const HomeScreen = ({navigation, route}) => {
  var [cartList, setcartList] = useState('aaa');
  const [text, setText] = useState('');
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#BDBDBD', paddingHorizontal: 5}}>
      <View style={{height: 5, backgroundColor: '#BDBDBD'}}></View>
      <Category></Category>

      <View style={{height: 5, backgroundColor: '#BDBDBD'}}></View>
      <ListPosts />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  textInput: {
    height: 60,
    width: 386,
    backgroundColor: 'white',
    borderColor: '#808080',
    borderWidth: 1,
    fontSize: 13,
    borderRadius: 30,
    paddingLeft: 25,
    paddingTop: -2,
  },
  wrapperText: {
    height: 200,
  },
  iconStyle: {
    width: 25,
    height: 25,
  },
});
export default HomeScreen;
