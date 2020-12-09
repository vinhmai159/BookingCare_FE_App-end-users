import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Alert,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import GetUserAPI from '../../../../API/User/get-User-api';
import {connect} from 'react-redux';
import icEmail from '../../../../../image/mail.png';
import icName from '../../../../../image/name.png';
import icAddress from '../../../../../image/pin.png';
import icGender from '../../../../../image/sex.png';
import {useNavigation} from '@react-navigation/native';
import icBack from '../../../../../image/back.png';
import UpdateUser from '../../../../API/User/update-user-api';

const {width} = Dimensions.get('window');
const ContactUpadte = (props) => {
  const {dataInforUser} = props;
  const [birthday, setbirthday] = React.useState(dataInforUser.birthday);
  const [FirstName, setFirstName] = React.useState(dataInforUser.fistName);
  const [LastName, setLastName] = React.useState(dataInforUser.lastName);
  const [Address, setAddress] = React.useState(dataInforUser.address);
  const [Gender, setGender] = React.useState(dataInforUser.gender);

  const {dataLogin} = props;
  const {wrapper} = styles;
  const [dataUser, setDataUser] = useState({});
  const navigation = useNavigation();
  const handleUpdateUser = () => {
    console.log(
      birthday +
        '/' +
        FirstName +
        '/' +
        LastName +
        '/' +
        Address +
        '/' +
        Gender,
    );
    UpdateUser(
      FirstName,
      LastName,
      birthday,
      Address,
      Gender,
      props.dataLogin.accessToken,
    )
      .then((json) => {
        var dataPost = JSON.parse(JSON.stringify(json));

        console.log(dataPost);
        GetUserAPI(props.dataLogin.accessToken)
          .then((json) => {
            var DataLoginUser = JSON.parse(JSON.stringify(json));
            // console.log('DataUser');
            // console.log(DataLoginUser);
            props.dispatch({
              type: 'dataInforUser',
              data: DataLoginUser,
            });
          })
          .catch((error) => {
            console.log(error);
          });
        navigation.goBack();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={wrapper}>
      <View style={{height: 5, backgroundColor: '#808080'}}></View>
      <View style={styles.wrapperFull2}>
        <TouchableOpacity
          style={styles.wrapperBackImageFull}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={icBack} style={styles.WrapperImageBack}></Image>
        </TouchableOpacity>
        <View style={styles.wrapperForm}>
          <View style={styles.wrapperIcText}>
            <Image source={icName} style={styles.wrapperIcon}></Image>
            <View style={styles.wrapperNameForm}>
              <Text style={[styles.styleTextInForm]}>fistName</Text>
            </View>
          </View>
          <View style={styles.wrapperTextData}>
            <TextInput
              onChangeText={(text) => setFirstName(text)}
              value={FirstName}
              style={[styles.styleTextInForm]}
              placeholder="FirstName"
            />
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
            <TextInput
              onChangeText={(text) => setLastName(text)}
              value={LastName}
              style={[styles.styleTextInForm]}
              placeholder="LastName"
            />
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
            <TextInput
              onChangeText={(text) => birthday(text)}
              value={birthday}
              style={[styles.styleTextInForm]}
              placeholder="birthday"
            />
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
            <TextInput
              onChangeText={(text) => setAddress(text)}
              value={Address}
              style={[styles.styleTextInForm]}
              placeholder="Address"
            />
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
            <TextInput
              onChangeText={(text) => setGender(text)}
              value={Gender}
              style={[styles.styleTextInForm]}
              placeholder="Gender"
            />
          </View>
        </View>
      </View>
      <View style={styles.wrapperBtnUpdateFull}>
        <TouchableOpacity
          onPress={() => {
            handleUpdateUser();
          }}>
          <View style={styles.wrapperBtnUpdate}>
            <Text style={styles.styleText}>SAVE DATA</Text>
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
  wrapperFull2: {
    backgroundColor: 'white',
    height: '60%',
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
  WrapperImageBack: {
    height: 20,
    width: 20,
  },
  wrapperBackImageFull: {
    paddingLeft: 6,
    paddingTop: 7,
    marginBottom: 2,
    borderBottomColor: '#FEB04A',
    borderBottomWidth: 2,
    paddingBottom: 8,
  },
});

function mapStateToProps(state) {
  return {
    dataLogin: state.dataLogin,
    dataInforUser: state.dataInforUser,
  };
}
export default connect(mapStateToProps)(ContactUpadte);
