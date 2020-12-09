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
import {connect} from 'react-redux';
import icMenu from '../../../../image/menu.png';
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
          backgroundColor: '#FEB04A',
          padding: 13,
        }}>
        <View style={styles.wrapper1}>
          <TouchableOpacity onPress={this.props.onOpen}>
            <Image source={icMenu} style={styles.iconStyle}></Image>
          </TouchableOpacity>
          <Text style={styles.textStyle}>BOOKING CARE</Text>
          <View style={styles.wrapperWrong} />
        </View>
        <View style={styles.wrapper2}>
          <TextInput
            style={styles.textInput}
            placeholder="Search"
            onChangeText={(text) => this.setState({text})}
            onTouchStart={this.props.setTab}
            onSubmitEditing={() => {
              this.props.setTab(this.state.text);
            }}
          />
        </View>
      </View>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     dataLogin: state.dataLogin,
//     dataInforUser: state.dataInforUser,
//   };
// }
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
    marginTop: 10,
    height: 35,
    width: 370,
    backgroundColor: 'white',
    borderColor: '#808080',
    borderWidth: 1,
    paddingLeft: 20,
    fontSize: 13,
    borderRadius: 10,
  },
  wrapper1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapper2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 22,
    fontFamily: 'monospace',
    color: 'black',
  },
  wrapperWrong: {
    width: 25,
    height: 25,
  },
});
