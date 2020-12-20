import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import icDoctor from '../../../../../image/doctor.png';
import icBack from '../../../../../image/back.png';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
const DoctorDetail = (props) => {
  const route = useRoute();
  const navigation = useNavigation();
  const {
    id,
    lastName,
    fistName,
    description,
    addressDetail,
    email,
    expertise,
    hospital
  } = route.params.e;
  const handlerBooking = () => {
    navigation.navigate('ScheduleDetail', {
      id,
    });
  };
  return (
    <View style={styles.wrapper}>
      <View style={{height: 5, backgroundColor: '#808080'}}></View>

      <ScrollView style={styles.wrapperForm}>
        <TouchableOpacity
          style={styles.wrapperBackImageFull}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={icBack} style={styles.WrapperImageBack}></Image>
        </TouchableOpacity>
        <View style={styles.wrapperImage}>
          <Image source={icDoctor} style={styles.bannerImageStyle}></Image>
        </View>
        <View style={styles.wrapperTextFull}>
          <Text style={styles.textStyle}>NAME: </Text>
          <View style={styles.FormText}>
            <Text style={styles.textStyle}>
              {lastName} {fistName}
            </Text>
          </View>
        </View>

        <View style={styles.wrapperTextFull}>
          <Text style={styles.textStyle}>ADDRESS: </Text>
          <View style={styles.FormText}>
            <Text style={styles.textStyle}>{addressDetail}</Text>
          </View>
        </View>

        <View style={styles.wrapperTextFull}>
          <Text style={styles.textStyle}>EMAIL: </Text>
          <View style={styles.FormText}>
            <Text style={styles.textStyle}>{email}</Text>
          </View>
        </View>

        <View style={styles.wrapperTextFull}>
          <Text style={styles.textStyle}>EXPERTISE: </Text>
          <View style={styles.FormText}>
            <Text style={styles.textStyle}>{expertise && expertise.name}</Text>
          </View>
        </View>

        <View style={styles.wrapperTextFull}>
                  <Text style={styles.textStyle}>HOSPITAL: </Text>
                  <View style={styles.FormText}>
                    <Text style={styles.textStyle}>{hospital && hospital.name}</Text>
                  </View>
                </View>

        <View style={styles.wrapperTextFull2}>
          <Text style={styles.textStyle}>DESCRIPTION: </Text>
          <View style={styles.FormText}>
            <Text style={styles.textStyle}>{description || null}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{alignItems: 'center', justifyContent: 'center'}}
          onPress={() => {
            handlerBooking();
          }}>
          <View style={styles.wrapperBtnUpdate}>
            <Text style={styles.styleText}>BOOKING</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {flex: 1, padding: 6, backgroundColor: '#808080'},
  wrapperForm: {backgroundColor: 'white', width: '100%'},
  bannerImageStyle: {
    width: '100%',
    height: 190,
  },
  wrapperBtnUpdate: {
    marginTop: 30,
    height: 70,
    width: '95%',
    backgroundColor: '#C9BE79',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  styleText: {
    fontSize: 22,
    fontFamily: 'monospace',
    color: 'black',
  },
  wrapperImage: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    margin: 10,
  },
  wrapperTextFull: {
    paddingTop: 2,
    paddingLeft: 17,
    flexDirection: 'row',
    borderRadius: 5,
    borderBottomColor: '#FEB04A',
    borderBottomWidth: 2,
    height: 40,
    alignItems: 'center',
  },
  wrapperTextFull2: {
    paddingTop: 2,
    paddingLeft: 17,
    flexDirection: 'row',
    borderRadius: 5,
    borderBottomColor: '#FEB04A',
    borderBottomWidth: 2,

    alignItems: 'center',
  },
  textStyle: {
    fontSize: 14,
    fontFamily: 'monospace',
    color: 'black',
  },
  FormText: {
    width: '70%',
  },
  WrapperImageBack: {
    height: 20,
    width: 20,
  },
  wrapperBackImageFull: {
    paddingLeft: 8,
    paddingTop: 10,

    paddingBottom: 7,
  },
});
export default DoctorDetail;
