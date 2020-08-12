import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import bannerImage from '../../../../../images/temp/banner.jpg';
const {height, width} = Dimensions.get('window');
const Collection = ({navigation, route}) => {
  return (
    <View style={styles.wrapper}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={styles.textStyle}>SPRING COLLECTION</Text>
      </View>
      <View style={{flex: 4}}>
        <Image source={bannerImage} style={styles.bannerImageStyle}></Image>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    //   955x465
    height: height * 0.32,
    backgroundColor: 'white',
    shadowColor: '#424242',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.5,
    padding: 10,
    paddingTop: 0,
  },
  bannerImageStyle: {width: 360, height: 190},
  textStyle: {
    fontSize: 17,
    fontFamily: 'monospace',
    color: '#6E6E6E',
  },
});
export default Collection;
