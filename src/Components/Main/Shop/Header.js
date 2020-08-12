import React, {Component, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';
import icLogo from '../../../../images/appIcon/ic_logo.png';
import icMenu from '../../../../images/appIcon/ic_menu.png';
import {connect} from 'react-redux';
const {height} = Dimensions.get('window');

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    return (
      <View
        style={{
          height: height / 8,
          backgroundColor: '#088A68',
          padding: 13,
        }}>
        <View style={styles.wrapper1}>
          <TouchableOpacity onPress={this.props.onOpen}>
            <Image source={icMenu} style={styles.iconStyle}></Image>
          </TouchableOpacity>
          <Text style={styles.textStyle}>Wearing a Dress</Text>
          <Image source={icLogo} style={styles.iconStyle}></Image>
        </View>
        <View style={styles.wrapper2}>
          <TextInput
            style={styles.textInput}
            placeholder="What do you want to buy?"
            onChangeText={(text) => this.setState({text})}
            onFocus={this.props.setTab}
            onPress={this.props.dispatch({
              type: 'Search',
              key: this.state.text,
            })}
          />
        </View>
      </View>
    );
  }
}
export default connect()(Header);
const styles = StyleSheet.create({
  text: {
    borderWidth: 1,
    paddingHorizontal: 5,
    backgroundColor: 'white',
    height: 35,
    paddingVertical: 6,
    borderColor: '#808080',
  },
  iconStyle: {
    width: 25,
    height: 25,
  },
  textInput: {
    height: 35,
    width: 370,
    backgroundColor: 'white',
    borderColor: '#808080',
    borderWidth: 1,
    paddingLeft: 20,

    fontSize: 13,
  },
  wrapper1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapper2: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 22,
    fontFamily: 'monospace',
    color: 'white',
  },
});
