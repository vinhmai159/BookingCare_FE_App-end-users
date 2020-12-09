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
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import icDoctor from '../../../../../image/doctor.png';
const {height} = Dimensions.get('window');

const Category: () => React$Node = (props) => {
  const navigation = useNavigation();
  const [value, setvalue] = useState([]);
  useEffect(() => {}, []);
  return (
    <View style={styles.wrapper}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={styles.textStyle}>LIST DOCTOR</Text>
      </View>
      <View style={{flex: 5}}>
        <Swiper>
          {props.ListDocter.map((e) => (
            <TouchableOpacity
              style={styles.wrapperListDoctor}
              onPress={() =>
                navigation.navigate('DoctorDetail', {
                  e,
                })
              }
              key={e.id}>
              <Image source={icDoctor} style={styles.bannerImageStyle}></Image>
              <View style={styles.wrapperText}>
                <View style={styles.wrapperText2}>
                  <Text style={styles.textStyle2}>Doctor: </Text>
                  <View>
                    <Text style={styles.textStyle2}>{e.fistName}</Text>
                  </View>
                </View>
                {/* <Text style={{width: 20}}></Text>
                <View style={styles.wrapperText2}>
                  <Text style={styles.textStyle2}>expertise: </Text>
                  <View style={{width: 30}}>
                    <Text style={styles.textStyle2}>{e.expertise.name}</Text>
                  </View>
                </View> */}
              </View>
            </TouchableOpacity>
          ))}
        </Swiper>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: height * 0.38,
    backgroundColor: 'white',
    shadowColor: '#424242',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.5,
    padding: 10,
    paddingTop: 0,
  },
  bannerImageStyle: {width: 360, height: 215},
  textStyle: {
    fontSize: 17,
    fontFamily: 'monospace',
    color: 'black',
  },
  textStyle2: {
    fontSize: 14,
    fontFamily: 'monospace',
    color: 'black',
  },
  wrapperListDoctor: {
    alignItems: 'center',
    // justifyContent: 'center',
  },
  wrapperText: {
    flexDirection: 'row',
    marginTop: 4,
  },
  wrapperText2: {
    flexDirection: 'row',
    marginTop: 0,
  },
});

function mapStateToProps(state) {
  return {
    ListDocter: state.ListDocter,
  };
}
export default connect(mapStateToProps)(Category);
