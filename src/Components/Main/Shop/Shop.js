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
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Home from './Home/Home';
import Contact from './Contact/Contact';
const {height} = Dimensions.get('window');
import Header from './Header';
import iconHome from '../../../../images/appIcon/home.png';
import iconHomeCLick from '../../../../images/appIcon/home0.png';
import iconCart from '../../../../images/appIcon/cart.png';
import iconCartCLick from '../../../../images/appIcon/cart0.png';
import iconSearch from '../../../../images/appIcon/search.png';
import iconSearchCLick from '../../../../images/appIcon/search0.png';
import iconContact from '../../../../images/appIcon/contact.png';
import iconContactCLick from '../../../../images/appIcon/contact0.png';
import {connect} from 'react-redux';

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'Home',
      cartArray: [],
    };
  }
  setTab() {
    this.setState({selectedTab: 'Search'});
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

        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Home'}
            title="Home"
            renderIcon={() => (
              <Image source={iconHomeCLick} style={styles.iconStyleNavigator} />
            )}
            renderSelectedIcon={() => (
              <Image source={iconHome} style={styles.iconStyleNavigator} />
            )}
            selectedTitleStyle={{color: '#0B6121'}}
            onPress={() => this.setState({selectedTab: 'Home'})}>
            <Home />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Cart'}
            title="Cart"
            renderIcon={() => (
              <Image source={iconCartCLick} style={styles.iconStyleNavigator} />
            )}
            badgeText={myValue.length}
            renderSelectedIcon={() => (
              <Image source={iconCart} style={styles.iconStyleNavigator} />
            )}
            selectedTitleStyle={{color: '#0B6121'}}
            onPress={() => this.setState({selectedTab: 'Cart'})}>
            <Cart cartArray={this.state.cartArray} />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'Search'}
            title="Search"
            renderIcon={() => (
              <Image
                source={iconSearchCLick}
                style={styles.iconStyleNavigator}
              />
            )}
            renderSelectedIcon={() => (
              <Image source={iconSearch} style={styles.iconStyleNavigator} />
            )}
            selectedTitleStyle={{color: '#0B6121'}}
            onPress={() => this.setState({selectedTab: 'Search'})}>
            <Search></Search>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Contact'}
            title="Contact"
            renderIcon={() => (
              <Image
                source={iconContactCLick}
                style={styles.iconStyleNavigator}
              />
            )}
            renderSelectedIcon={() => (
              <Image source={iconContact} style={styles.iconStyleNavigator} />
            )}
            selectedTitleStyle={{color: '#0B6121'}}
            onPress={() => this.setState({selectedTab: 'Contact'})}>
            <Contact></Contact>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  iconStyleNavigator: {
    width: 27,
    height: 27,
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
});

function mapStateToProps(state) {
  return {myValue: state.cartArray};
}
export default connect(mapStateToProps)(Shop);
