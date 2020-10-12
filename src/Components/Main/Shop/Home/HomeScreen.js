import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

import Category from './Category';

const HomeScreen = ({navigation, route}) => {
  var [cartList, setcartList] = useState('aaa');
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#BDBDBD', padding: 6}}>
      <Category></Category>

      <View style={{height: 6, backgroundColor: '#BDBDBD'}}></View>
    </ScrollView>
  );
};

export default HomeScreen;
