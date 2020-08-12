import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import React, {Component, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ListProduct from '../ListProductDetail/ListProduct';
import ProductDetail from '../ListProductDetail/ProductDetail';
import sp1 from '../../../../../images/temp/sp3.jpeg';
import SearchAPI from '../../../../API/SearchAPI';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
const url = 'http://192.168.1.31/WebService/app/images/product/';
const {width, height} = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;
const SearchView = (props) => {
  const navigation = useNavigation();
  const {
    product,
    mainRight,
    txtMaterial,
    txtColor,
    txtName,
    txtPrice,
    productImage,
    txtShowDetail,
    showDetailContainer,
    wrapper,
  } = styles;
  const [arraySearch, setarraySearch] = useState([]);
  const value = 'flor';
  useEffect(() => {
    fetch('http://192.168.1.31/WebService/app/search.php?key=' + props.temp)
      .then((response) => response.json())
      .then((json) => setarraySearch(json))
      .catch((error) => console.error(error));
  });
  return (
    <View style={wrapper}>
      <ScrollView style={styles.wrapperHeader}>
        {arraySearch.map((e) => (
          <View style={styles.wrapper2}>
            <Image
              source={{
                uri: url + e.images[0],
              }}
              style={styles.ImageStyle}></Image>
            <View style={styles.detailStylte}>
              <Text style={styles.TextName}>{e.name}</Text>
              <Text style={styles.TextPrice}>{e.price}$</Text>
              <View style={styles.GoToDetailsStyle}>
                <Text style={styles.TextColor}>Color: {e.color}</Text>

                <TouchableOpacity
                  onPress={() => navigation.navigate('ProductDetail', {e})}>
                  <Text style={styles.TextBottonShow}>SHOW DETAIL</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
// function mapStateToProps(state) {
//   return {key: state.key};
// }
function mapStateToProps(state) {
  return {temp: state.search};
}
export default connect(mapStateToProps)(SearchView);
const styles = StyleSheet.create({
  wrapper: {flex: 1, padding: 6, backgroundColor: '#BDBDBD'},
  textStyle: {
    paddingLeft: 60,
    fontSize: 20,
    fontFamily: 'monospace',
    color: '#6E6E6E',
  },
  wrapper1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  wrapper2: {
    width: 370,
    flexDirection: 'row',
    paddingTop: 10,
    borderTopWidth: 1,
    paddingHorizontal: 15,
    borderColor: '#BDBDBD',
    marginBottom: 20,
  },
  wrapperHeader: {height: height / 14, padding: 13, backgroundColor: 'white'},
  iconStyle: {
    width: 25,
    height: 25,
  },
  ImageStyle: {
    width: 85,
    height: (85 * 452) / 361,
  },
  TextName: {
    fontSize: 17,
    fontFamily: 'monospace',
    color: '#6E6E6E',
    paddingBottom: 10,
  },
  TextPrice: {
    fontSize: 17,
    fontFamily: 'monospace',
    color: 'red',
    paddingBottom: 10,
  },
  detailStylte: {
    flex: 1,
    paddingLeft: 15,

    justifyContent: 'space-between',
  },
  GoToDetailsStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  TextBottonShow: {
    fontSize: 17,
    fontFamily: 'monospace',
    color: '#8A0829',
  },
  TextColor: {
    fontSize: 15,
    fontFamily: 'monospace',
    color: '#6E6E6E',
  },
  ColorView: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: 'blue',
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
    justifyContent: 'space-around',
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
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Avenir',
  },
  txtColor: {
    paddingLeft: 20,
    color: 'black',
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Avenir',
  },
  txtMaterial: {
    paddingLeft: 20,
    color: 'black',
    fontSize: 15,
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
    flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'flex-end',
    marginTop: 100,
  },
});
