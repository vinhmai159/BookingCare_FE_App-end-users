import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const Contact = () => {
  const {wrapper} = styles;
  return <View style={wrapper}></View>;
};

const styles = StyleSheet.create({
  wrapper: {flex: 1, backgroundColor: 'yellow'},
});

export default Contact;
