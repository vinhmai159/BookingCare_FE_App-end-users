import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import sp1 from '../../../../../images/temp/sp1.jpeg';
import sp2 from '../../../../../images/temp/sp2.jpeg';
import sp3 from '../../../../../images/temp/sp3.jpeg';
import sp4 from '../../../../../images/temp/sp4.jpeg';
import {useNavigation} from '@react-navigation/native';
const {height, width} = Dimensions.get('window');
const productWidh = (width - 50) / 2;
const productImageHeigh = (productWidh / 361) * 452;
const url = 'http://192.168.1.31/WebService/app/images/product/';
const TopProduct: () => React$Node = () => {
  const navigation = useNavigation();
  const [Top, setTop] = useState([]);

  useEffect(() => {
    fetch('http://192.168.1.31/WebService/app/index.php')
      .then((response) => response.json())
      .then((json) => {
        console.log(json.product), setTop(json.product);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textStyle}>TOP PRODUCT</Text>
      <View style={styles.body}>
        {Top.map((e) => (
          <TouchableOpacity
            style={styles.product}
            onPress={() =>
              navigation.navigate('ProductDetail', {
                e,
              })
            }
            key={e.id}>
            <Image
              style={styles.productImage}
              source={{
                uri: url + e.images[0],
              }}></Image>
            <Text style={styles.textProductName}>{e.name}</Text>
            <Text style={styles.textProductPrice}>{e.price}$</Text>
          </TouchableOpacity>
        ))}

        {/* <TouchableOpacity
          style={styles.product}
          onPress={() => navigation.navigate('ProductDetail')}>
          <Image source={sp1} style={styles.productImage}></Image>
          <Text style={styles.textProductName}>NAME</Text>
          <Text style={styles.textProductPrice}>120$</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.product}
          onPress={() => navigation.navigate('ProductDetail')}>
          <Image source={sp2} style={styles.productImage}></Image>
          <Text style={styles.textProductName}>NAME</Text>
          <Text style={styles.textProductPrice}>100$</Text>
        </TouchableOpacity> */}
        <View style={{height: 7, width}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    shadowColor: '#424242',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.5,
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    paddingBottom: 15,
  },
  textStyle: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    paddingTop: 11,
    paddingLeft: 15,
    height: 50,
    fontSize: 20,
    fontFamily: 'monospace',
    color: '#6E6E6E',
  },
  product: {
    width: productWidh,
    paddingBottom: 5,
    borderWidth: 1.5,
    borderColor: '#6E6E6E',
  },
  productImage: {
    width: productWidh - 2.5,
    height: productImageHeigh,
  },
  textProductName: {
    paddingTop: 10,
    paddingLeft: 10,
    fontFamily: 'monospace',
    color: '#6E6E6E',
  },
  textProductPrice: {
    paddingLeft: 10,
    fontFamily: 'monospace',
    color: 'red',
    fontSize: 19,
  },
});
export default TopProduct;
