import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import React, {Component, useState} from 'react';

class CartView extends Component {
  render() {
    const {wrapper} = styles;

    return <View style={wrapper}></View>;
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'blue',
  },
});

export default CartView;
