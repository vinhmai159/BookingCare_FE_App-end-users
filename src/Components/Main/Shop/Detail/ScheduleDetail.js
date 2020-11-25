import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import {isNil} from 'lodash';
import icDoctor from '../../../../../image/doctor.png';
import icBack from '../../../../../image/back.png';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import ScheduleDoctor from '../../../../API/Schedule/get-schedule-doctor';
import {connect} from 'react-redux';
import bookingCare from '../../../../API/Schedule/booking-care-schedule';
const ScheduleDetail = (props) => {
  const route = useRoute();
  const navigation = useNavigation();
  const {id} = route.params;
  const [dataSchedule, setdataSchedule] = useState([]);
  useEffect(() => {
    async function GetData() {
      ScheduleDoctor(id)
        .then((json) => {
          var data = JSON.parse(JSON.stringify(json));
          setdataSchedule(data);
          console.log(data);
          props.dispatch({
            type: 'setSchedule',
            data: data,
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }
    GetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  var arr = {
    MONDAY: [
      {
        scheduleId: '5e5226f0-4fef-433d-a098-927f31821ded',
        calenderId: '63efc1cc-c8db-4a81-ac96-119aaa60c308',
        timeSlot: '06:00 - 07:00',
      },
    ],
    TUESDAY: [
      {
        scheduleId: '1b2ae934-0fd1-4acc-af75-7cae17b4cd3a',
        calenderId: 'fe5089fc-03ee-41b4-8861-ee23c7d0024b',
        timeSlot: '06:00 - 07:00',
      },
      {
        scheduleId: '9e58acd0-681f-4c0e-8cd9-bc90ddafb1ae',
        calenderId: '8f9814ce-527f-45db-8a62-4a4e2a81df1f',
        timeSlot: '13:00 - 14:00',
      },
      {
        scheduleId: 'fc2f54eb-2f30-483c-8568-533b54491443',
        calenderId: '4d0b664c-f415-467b-9bd5-43435c675783',
        timeSlot: '16:00 - 17:00',
      },
      {
        scheduleId: '1b2ae934-0fd1-4acc-af75-7cae17b4cd3a',
        calenderId: 'fe5089fc-03ee-41b4-8861-ee23c7d0024b',
        timeSlot: '06:00 - 07:00',
      },
      {
        scheduleId: '9e58acd0-681f-4c0e-8cd9-bc90ddafb1ae',
        calenderId: '8f9814ce-527f-45db-8a62-4a4e2a81df1f',
        timeSlot: '13:00 - 14:00',
      },
    ],
    WEDNESDAY: [],
    THURSDAY: [],
    FRIDAY: [],
    SATURDAY: [],
    SUNDAY: [],
  };
  //   console.warn(id);
  const handleBookSchedule = (e) => {
    console.log(props.dataLogin);
    console.log('book /' + e);
    console.log(props.dataLogin.accessToken);
    bookingCare(e, props.dataLogin.accessToken)
      .then((json) => {
        var data = JSON.parse(JSON.stringify(json));
        setdataSchedule(data);
        console.log(data);
        if (!isNil(data.status) && data.status === 'BOOKED') {
          Alert.alert(
            'Nofity',
            'Success ',

            [
              {
                text: 'Cancel',
                onPress: () => {
                  console.log('Cancel Pressed');
                },
                style: 'cancel',
              },
              {
                text: 'OK',
                onPress: () => {
                  console.log('Cancel Pressed');
                },
              },
            ],
            {cancelable: false},
          );
          navigation.navigate('DoctorDetail');
        } else {
          Alert.alert(
            'Nofity',
            'Error: ',

            [
              {
                text: 'Cancel',
                onPress: () => {
                  console.log('Cancel Pressed');
                },
                style: 'cancel',
              },
              {
                text: 'OK',
                onPress: () => {
                  console.log('Cancel Pressed');
                },
              },
            ],
            {cancelable: false},
          );
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.wrapperScroll}>
        <TouchableOpacity
          style={styles.wrapperBackImageFull}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={icBack} style={styles.WrapperImageBack}></Image>
        </TouchableOpacity>
        <View style={{alignItems: 'center'}}>
          <View style={styles.wrapperDay}>
            <Text style={styles.wrapperTextDay}>MONDAY:</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
                paddingBottom: 15,
              }}>
              {props.arrChedule.MONDAY.map((e) => (
                <TouchableOpacity
                  style={styles.wrapperTime}
                  key={e.scheduleId}
                  onPress={() => {
                    handleBookSchedule(e.scheduleId);
                  }}>
                  <Text>{e.timeSlot}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.wrapperDay}>
            <Text style={styles.wrapperTextDay}>TUESDAY:</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
                paddingBottom: 15,
              }}>
              {props.arrChedule.TUESDAY.map((e) => (
                <TouchableOpacity
                  style={styles.wrapperTime}
                  key={e.scheduleId}
                  onPress={() => {
                    handleBookSchedule(e.scheduleId);
                  }}>
                  <Text>{e.timeSlot}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.wrapperDay}>
            <Text style={styles.wrapperTextDay}>WEDNESDAY:</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
                paddingBottom: 15,
              }}>
              {props.arrChedule.WEDNESDAY.map((e) => (
                <TouchableOpacity
                  style={styles.wrapperTime}
                  key={e.scheduleId}
                  onPress={() => {
                    handleBookSchedule(e.scheduleId);
                  }}>
                  <Text>{e.timeSlot}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.wrapperDay}>
            <Text style={styles.wrapperTextDay}>THURSDAY:</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
                paddingBottom: 15,
              }}>
              {props.arrChedule.THURSDAY.map((e) => (
                <TouchableOpacity
                  style={styles.wrapperTime}
                  key={e.scheduleId}
                  onPress={() => {
                    handleBookSchedule(e.scheduleId);
                  }}>
                  <Text>{e.timeSlot}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.wrapperDay}>
            <Text style={styles.wrapperTextDay}>FRIDAY:</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
                paddingBottom: 15,
              }}>
              {props.arrChedule.FRIDAY.map((e) => (
                <TouchableOpacity
                  style={styles.wrapperTime}
                  key={e.scheduleId}
                  onPress={() => {
                    handleBookSchedule(e.scheduleId);
                  }}>
                  <Text>{e.timeSlot}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.wrapperDay}>
            <Text style={styles.wrapperTextDay}>SATURDAY:</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
                paddingBottom: 15,
              }}>
              {props.arrChedule.SATURDAY.map((e) => (
                <View
                  style={styles.wrapperTime}
                  key={e.scheduleId}
                  onPress={() => {
                    handleBookSchedule(e.scheduleId);
                  }}>
                  <Text>{e.timeSlot}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.wrapperDay}>
            <Text style={styles.wrapperTextDay}>SUNDAY:</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
                paddingBottom: 15,
              }}>
              {props.arrChedule.SUNDAY.map((e) => (
                <TouchableOpacity
                  style={styles.wrapperTime}
                  key={e.scheduleId}
                  onPress={() => {
                    handleBookSchedule(e.scheduleId);
                  }}>
                  <Text>{e.timeSlot}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {flex: 1, padding: 6, backgroundColor: '#808080'},
  wrapperScroll: {flex: 1, padding: 6, backgroundColor: 'white'},
  WrapperImageBack: {
    height: 20,
    width: 20,
  },
  wrapperTime: {
    backgroundColor: 'white',
    height: 35,
    width: 165,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginBottom: 10,
    borderColor: '#FEB04A',
  },
  wrapperBackImageFull: {
    paddingLeft: 3,
    paddingTop: 10,
    paddingBottom: 13,
  },
  wrapperDay: {
    width: '99%',
    borderWidth: 0.5,
    borderRadius: 5,
    backgroundColor: '#EEEEEE',
    marginBottom: 8,
  },
  wrapperTextDay: {
    padding: 5,
    fontSize: 20,
    color: 'black',
    fontFamily: 'monospace',
  },
});

function mapStateToProps(state) {
  return {
    arrChedule: state.arrChedule,
    dataLogin: state.dataLogin,
  };
}
export default connect(mapStateToProps)(ScheduleDetail);
