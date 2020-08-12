import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Button,
  TextInput,
  Image,
  Dimensions,
} from 'react-native';
import icLogo from '../../../../../images/appIcon/back.png';
import sp1 from '../../../../../images/temp/sp1.jpeg';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
const {height} = Dimensions.get('window');
const ListProduct = (props) => {
  const route = useRoute();
  const navigation = useNavigation();
  const [productArray, setproductArray] = useState([]);
  const {id} = route.params.e;
  const link =
    'http://192.168.1.31/WebService/app/product_by_type.php?id_type=' + id;
  useEffect(() => {
    fetch(link)
      .then((response) => response.json())
      .then((json) => setproductArray(json))
      .catch((error) => console.error(error));
  });
  const {value2} = props.navigation;

  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapper1}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={icLogo} style={styles.iconStyle}></Image>
        </TouchableOpacity>
        <Text style={styles.textStyle}>Party Dress</Text>
      </View>
      <ScrollView style={styles.wrapperHeader}>
        {productArray.map((e) => (
          <View style={styles.wrapper2}>
            <Image
              source={{
                uri:
                  'http://192.168.1.31/WebService/app/images/product/' +
                  e.images[0],
              }}
              style={styles.ImageStyle}></Image>
            <View style={styles.detailStylte}>
              <Text style={styles.TextName}>{e.name}</Text>
              <Text style={styles.TextPrice}>{e.price}</Text>
              <View style={styles.GoToDetailsStyle}>
                <Text style={styles.TextColor}>{e.color}</Text>

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
    /* /* <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>ListProduct</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ProductDetail')}>
          <Text>Go to Product Detail </Text>
        </TouchableOpacity> */
  );
};
const styles = StyleSheet.create({
  wrapper: {flex: 1, padding: 6, backgroundColor: '#BDBDBD'},
  textStyle: {
    paddingLeft: 60,
    fontSize: 20,
    fontFamily: 'monospace',
    color: '#6E6E6E',
  },
  wrapper1: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
    backgroundColor: 'white',
    height: 60,
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
  wrapperHeader: {
    height: height / 14,
    padding: 13,
    backgroundColor: 'white',
  },
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
});
export default ListProduct;
