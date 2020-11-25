import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Alert,
  TouchableOpacity,
} from 'react-native';
import GetUserAPI from '../../../../API/User/get-User-api';
import {connect} from 'react-redux';
import icEmail from '../../../../../image/mail.png';
import icName from '../../../../../image/name.png';
import icAddress from '../../../../../image/pin.png';
import icGender from '../../../../../image/sex.png';
import {useNavigation} from '@react-navigation/native';
const {width} = Dimensions.get('window');
const ContactView = (props) => {
  const {dataLogin, dataInforUser} = props;
  const {wrapper} = styles;
  const [dataUser, setDataUser] = useState({});
  const navigation = useNavigation();

  const handleUpadteUser = () => {
    navigation.navigate('COntactUpdates');
  };
  return (
    <View style={wrapper}>
      <View style={{height: 5, backgroundColor: '#808080'}}></View>
      <View style={styles.wrapperForm}>
        <View style={styles.wrapperIcText}>
          <Image source={icName} style={styles.wrapperIcon}></Image>
          <View style={styles.wrapperNameForm}>
            <Text style={[styles.styleTextInForm]}>fistName</Text>
          </View>
        </View>
        <View style={styles.wrapperTextData}>
          <Text style={[styles.styleTextInForm]}>{dataInforUser.fistName}</Text>
        </View>
      </View>

      <View style={styles.wrapperForm}>
        <View style={styles.wrapperIcText}>
          <Image source={icName} style={styles.wrapperIcon}></Image>
          <View style={styles.wrapperNameForm}>
            <Text style={[styles.styleTextInForm]}>lastName</Text>
          </View>
        </View>
        <View style={styles.wrapperTextData}>
          <Text style={[styles.styleTextInForm]}>{dataInforUser.lastName}</Text>
        </View>
      </View>
      <View style={styles.wrapperForm}>
        <View style={styles.wrapperIcText}>
          <Image source={icEmail} style={styles.wrapperIcon}></Image>
          <View style={styles.wrapperNameForm}>
            <Text style={[styles.styleTextInForm]}>birthday</Text>
          </View>
        </View>
        <View style={styles.wrapperTextData}>
          <Text style={[styles.styleTextInForm]}>{dataInforUser.birthday}</Text>
        </View>
      </View>

      <View style={styles.wrapperForm}>
        <View style={styles.wrapperIcText}>
          <Image source={icAddress} style={styles.wrapperIcon}></Image>
          <View style={styles.wrapperNameForm}>
            <Text style={[styles.styleTextInForm]}>address</Text>
          </View>
        </View>
        <View style={styles.wrapperTextData}>
          <Text style={[styles.styleTextInForm]}>{dataInforUser.address}</Text>
        </View>
      </View>

      <View style={styles.wrapperForm}>
        <View style={styles.wrapperIcText}>
          <Image source={icGender} style={styles.wrapperIcon}></Image>
          <View style={styles.wrapperNameForm}>
            <Text style={[styles.styleTextInForm]}>gender</Text>
          </View>
        </View>
        <View style={styles.wrapperTextData}>
          <Text style={[styles.styleTextInForm]}>{dataInforUser.gender}</Text>
        </View>
      </View>
      <View style={styles.wrapperBtnUpdateFull}>
        <TouchableOpacity
          onPress={() => {
            handleUpadteUser();
          }}>
          <View style={styles.wrapperBtnUpdate}>
            <Text style={styles.styleText}>UPDATE USER</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#808080',
    paddingHorizontal: 5,
  },
  wrapperForm: {
    backgroundColor: 'white',
    height: 75,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    // borderWidth: 1,
    // borderRadius: 1,
    borderRadius: 5,
    borderBottomColor: '#FEB04A',
    borderBottomWidth: 2,
    // borderColor: '#FEB04A',
  },
  wrapperIcText: {
    flexDirection: 'row',
    width: 100,
    alignItems: 'center',
    //justifyContent: 'space-between',
  },
  wrapperNameForm: {
    paddingLeft: 10,
  },
  wrapperTextData: {
    width: 150,
  },
  wrapperIcon: {
    height: 20,
    width: 20,
  },
  wrapperBtnUpdate: {
    height: 70,
    width: '100%',
    backgroundColor: '#C9BE79',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  wrapperBtnUpdateFull: {
    paddingTop: 155,
  },
  styleText: {
    fontSize: 22,
    fontFamily: 'monospace',
    color: 'black',
  },
  styleTextInForm: {
    fontSize: 16,
    fontFamily: 'monospace',
    color: 'black',
  },
});

function mapStateToProps(state) {
  return {
    dataLogin: state.dataLogin,
    dataInforUser: state.dataInforUser,
  };
}
export default connect(mapStateToProps)(ContactView);
