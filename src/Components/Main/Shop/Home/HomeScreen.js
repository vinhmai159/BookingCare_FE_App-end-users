import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';
const HomeScreen = ({navigation, route}) => {
  var [cartList, setcartList] = useState('aaa');
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#BDBDBD', padding: 6}}>
      <TouchableOpacity onPress={() => navigation.navigate('ListProduct')}>
        <Collection></Collection>
      </TouchableOpacity>
      <View style={{height: 6, backgroundColor: '#BDBDBD'}}></View>

      <Category></Category>

      <View style={{height: 6, backgroundColor: '#BDBDBD'}}></View>
      <TopProduct></TopProduct>
    </ScrollView>
  );
};

export default HomeScreen;
