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
import {connect} from 'react-redux';
import sp1 from '../../.././../../images/temp/sp1.jpeg';
import saverCarts from '../../../../AsyncStorage/AsyncStorage';
const {width} = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;
function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
  );
}
class CartView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [
        {id: 33, quantity: 3},
        {id: 33, quantity: 3},
      ],
    };
  }

  increase() {
    this.props.dispatch({
      type: 'increase',
      id: this.props.myValue.id,
    });
  }
  render() {
    const {
      main,
      checkoutButton,
      checkoutTitle,
      wrapper,
      product,
      mainRight,
      productController,
      txtName,
      txtPrice,
      productImage,
      numberOfProduct,
      txtShowDetail,
      showDetailContainer,
    } = styles;
    const {myValue, myValue2, tokenInfor} = this.props;
    const token = tokenInfor.map((er) => er.token);
    var value = '';
    {
      tokenInfor.map((e) => (value = e.token));
    }
    const SendCart = () => {
      const arrCartSend = myValue.map((e) => ({
        id: e.id,
        quantity: e.sum,
      }));
      fetch('http://192.168.1.31/WebService/app/cart.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: value,
          arrayDetail: arrCartSend,
        }),
      })
        .then((response) => response.text())
        .then((text) => console.log(text))
        .catch((error) => console.error(error));
    };

    return (
      <View style={wrapper}>
        <ScrollView style={main}>
          {myValue.map((e) => (
            <View style={product}>
              <Image
                source={{
                  uri:
                    'http://192.168.1.31/WebService/app/images/product/' +
                    e.image,
                }}
                style={productImage}
                key={e.id}
              />
              <View style={[mainRight]}>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <Text style={txtName}>{e.name}</Text>
                  <TouchableOpacity>
                    <Text style={{fontFamily: 'Avenir', color: '#969696'}}>
                      X
                    </Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={txtPrice}>{e.price}$</Text>
                </View>
                <View style={productController}>
                  <View style={numberOfProduct}>
                    <TouchableOpacity onPress={this.increase.bind(this)}>
                      <Text style={{paddingLeft: 23, fontSize: 20}}>+</Text>
                    </TouchableOpacity>
                    <Text style={{paddingLeft: 15, fontSize: 20}}>{e.sum}</Text>
                    <TouchableOpacity>
                      <Text style={{paddingLeft: 15, fontSize: 20}}>-</Text>
                    </TouchableOpacity>
                  </View>

                  {/* <TouchableOpacity
                    style={showDetailContainer}
                    onPress={
                      (() => this.props.navigation.navigate('ProductDetail'),
                      {e})
                    }>
                    <Text style={txtShowDetail}>Show detail</Text>
                  </TouchableOpacity> */}
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
        <TouchableOpacity style={checkoutButton} onPress={SendCart}>
          <Text style={checkoutTitle}>TOTAL {1000}$ CHECKOUT NOW</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#DFDFDF',
  },
  checkoutButton: {
    height: 50,
    margin: 10,
    marginTop: 0,
    backgroundColor: '#2ABB9C',
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    width,
    backgroundColor: '#DFDFDF',
  },
  checkoutTitle: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Avenir',
  },
  product: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    shadowColor: '#3B5458',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
  },
  productImage: {
    width: imageWidth,
    height: imageHeight,
    flex: 1,
    resizeMode: 'center',
  },
  mainRight: {
    flex: 3,
    justifyContent: 'space-between',
  },
  productController: {
    flexDirection: 'row',
  },
  numberOfProduct: {
    flex: 1,
    flexDirection: 'row',
  },
  txtName: {
    paddingLeft: 20,
    color: '#A7A7A7',
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Avenir',
  },
  txtPrice: {
    paddingLeft: 20,
    color: '#C21C70',
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Avenir',
  },
  txtShowDetail: {
    color: '#C21C70',
    fontSize: 10,
    fontWeight: '400',
    fontFamily: 'Avenir',
    textAlign: 'right',
  },
  showDetailContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
function mapStateToProps(state) {
  return {
    myValue: state.cartArray,
    myValue2: state.price,
    tokenInfor: state.arrayInfor,
  };
}
export default connect(mapStateToProps)(CartView);
