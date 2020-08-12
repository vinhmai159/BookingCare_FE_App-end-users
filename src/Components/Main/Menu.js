import React, {Component, useState} from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native';

const Menu = ({navigation, route}) => {
  return (
    <View style={styles.wrapper}>
      {/* <Button
        title="Go to Detail"
        onPress={() => navigation.replace('Authentication')}></Button>
      <Button
        title="Go to Order History"
        onPress={() => navigation.replace('Orderhistory')}></Button>
      <Button
        title="Go to Change Information"
        onPress={() => navigation.replace('ChangeInfor')}></Button> */}
    </View>
  );
};

export default Menu;
const styles = StyleSheet.create({
  wrapper: {flex: 1, backgroundColor: '#6E6E6E'},
});
