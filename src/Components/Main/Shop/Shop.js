import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import React, {Component, useState} from 'react';
import TabNavigator from 'react-native-tab-navigator';
import Notify from './Notify/Notify';
import Search from './Search/Search';
import Home from './Home/Home';
import Contact from './Contact/Contact';

import Header from './Header';

import icHome from '../../../../image/House0.png';
import icHomeClick from '../../../../image/House.png';
import icNofity from '../../../../image/Nofity0.png';
import icNofityClick from '../../../../image/Nofity.png';
import icSearch from '../../../../image/Searchh0.png';
import icSearchClick from '../../../../image/Searchh.png';
import icContact from '../../../../image/User0.png';
import icContactClick from '../../../../image/User.png';
import {connect} from 'react-redux';
import GetUserAPI from '../../../API/User/get-User-api';
class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'Home',
      cartArray: [],
    };
  }

  setTab(text) {
    this.setState({selectedTab: 'Search'});
    //console.log(text);
    if (text != null) {
      this.props.dispatch({
        type: 'setTextSearch',
        data: text,
      });
      // console.log(text);
    }
  }
  openMenu() {
    const {open} = this.props;
    open();
  }

  render() {
    const {myValue} = this.props;
    return (
      <View style={{flex: 1}}>
        <Header
          setTab={this.setTab.bind(this)}
          onOpen={this.openMenu.bind(this)}
        />

        <TabNavigator tabBarStyle={{height: 50}}>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Home'}
            title="Home"
            renderIcon={() => (
              <Image source={icHome} style={styles.iconStyleNavigator} />
            )}
            renderSelectedIcon={() => (
              <Image source={icHomeClick} style={styles.iconStyleNavigator} />
            )}
            selectedTitleStyle={{color: '#0B6121'}}
            onPress={() => this.setState({selectedTab: 'Home'})}>
            <Home />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Medical Record'}
            title="Medical Record"
            renderIcon={() => (
              <Image source={icNofity} style={styles.iconStyleNavigator} />
            )}
            renderSelectedIcon={() => (
              <Image source={icNofityClick} style={styles.iconStyleNavigator} />
            )}
            selectedTitleStyle={{color: '#0B6121'}}
            onPress={() => {
              this.setState({selectedTab: 'Medical Record'});
            }}>
            <Notify cartArray={this.state.cartArray} />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'Search'}
            title="Search"
            renderIcon={() => (
              <Image source={icSearch} style={styles.iconStyleNavigator} />
            )}
            renderSelectedIcon={() => (
              <Image source={icSearchClick} style={styles.iconStyleNavigator} />
            )}
            selectedTitleStyle={{color: '#0B6121'}}
            onPress={() => this.setState({selectedTab: 'Search'})}>
            <Search />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Contact'}
            title="Contact"
            renderIcon={() => (
              <Image source={icContact} style={styles.iconStyleNavigator} />
            )}
            renderSelectedIcon={() => (
              <Image
                source={icContactClick}
                style={styles.iconStyleNavigator}
              />
            )}
            selectedTitleStyle={{color: '#0B6121'}}
            onPress={() => {
              GetUserAPI(this.props.dataLogin.accessToken)
                .then((json) => {
                  var DataLoginUser = JSON.parse(JSON.stringify(json));
                  console.log('DataUser');
                  console.log(DataLoginUser);
                  this.props.dispatch({
                    type: 'dataInforUser',
                    data: DataLoginUser,
                  });
                })
                .catch((error) => {
                  console.log(error);
                });
              this.setState({selectedTab: 'Contact'});
            }}>
            <Contact></Contact>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  iconStyleNavigator: {
    width: 23,
    height: 23,
  },
  iconStyle: {
    width: 25,
    height: 25,
  },
  textInput: {
    height: 35,
    width: 366,
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
    flex: 1,
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 22,
    fontFamily: 'monospace',
    color: 'white',
  },
  wrapperTab: {
    height: 49,
  },
});
function mapStateToProps(state) {
  return {
    dataLogin: state.dataLogin,
    dataInforUser: state.dataInforUser,
  };
}
export default connect(mapStateToProps)(Shop);
