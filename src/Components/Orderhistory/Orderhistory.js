import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const Orderhistory = (props) => {
  const navigation = useNavigation();
  const {wrapper, header, headerTitle, backIconStyle, body, orderRow} = styles;
  const [arrayHistory, setarrayHistory] = useState([]);

  return <View style={wrapper}></View>;
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  wrapper: {flex: 1, backgroundColor: 'blue'},
});

export default Orderhistory;
