import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import little from '../../../../../images/temp/little.jpg';
import maxi from '../../../../../images/temp/maxi.jpg';
import party from '../../../../../images/temp/party.jpg';
import {useNavigation} from '@react-navigation/native';
const {height, width} = Dimensions.get('window');
const url = 'http://192.168.1.31/WebService/app/images/type/';
const Category: () => React$Node = () => {
  const navigation = useNavigation();
  const [value, setvalue] = useState([]);
  const [value2, setvalue2] = useState([]);
  useEffect(() => {
    fetch('http://192.168.1.31/WebService/app/index.php')
      .then((response) => response.json())
      .then((json) => {
        setvalue(json.type);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <View style={styles.wrapper}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={styles.textStyle}>LIST OF CATEGORY</Text>
      </View>
      <View style={{flex: 4}}>
        <Swiper>
          {value.map((e) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ListProduct', {
                  e,
                })
              }
              key={e.id}>
              <Image
                source={{
                  uri: url + e.image,
                }}
                style={styles.bannerImageStyle}></Image>
            </TouchableOpacity>
          ))}
        </Swiper>
      </View>
    </View>
    // <View>
    //   <TouchableOpacity onPress={() => navigation.navigate('ProductDetail')}>
    //     <Text>Vien</Text>
    //   </TouchableOpacity>
    // </View>
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
export default Category;
