import React from 'react';

import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
const Logout = (props) => {
  const navigation = useNavigation();

  return (
    <View style={{paddingTop: 140}}>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate('Authentication')}>
        <Text style={styles.Text}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  Button: {
    height: 50,
    width: 250,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginBottom: 20,
  },
  Text: {
    fontSize: 18,
    fontFamily: 'monospace',
    color: 'black',
  },
});
export default connect()(Logout);
