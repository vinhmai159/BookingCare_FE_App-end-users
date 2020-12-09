import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MerdicalRecordAPI from '../../../../API/Schedule/medical-record-api';
import {connect} from 'react-redux';
const NotifyView = (props) => {
  const {wrapper} = styles;
  const [dataGet, setdataGet] = useState([]);
  useEffect(() => {
    async function GetData() {
      MerdicalRecordAPI(props.dataLogin.accessToken)
        .then((json) => {
          const dataMedicalRecord = JSON.parse(JSON.stringify(json));

          setdataGet(dataMedicalRecord.data);
          // props.dispatch({
          //   type: 'setdataMedicalRecord',
          //   data: dataMedicalRecord.data,
          // });
        })
        .catch((error) => {
          console.error(error);
        });
    }
    GetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={wrapper}>
      <View style={{height: 5, backgroundColor: '#808080'}}></View>
      <ScrollView style={styles.wrapper2}>
        {dataGet.map((e) => (
          <View style={styles.wapperDoctorList} key={e.id}>
            <View style={{marginTop: 10, paddingBottom: 10}}>
              <View style={styles.wrapperForm}>
                <Text style={styles.styleTextHeader}>Date:</Text>
                <Text style={styles.styleTextNext}>{e.createAt}</Text>
              </View>
              <View style={styles.wrapperForm}>
                <Text style={styles.styleTextHeader}>Symptoms:</Text>
                <Text style={styles.styleTextNext}>{e.symptoms}</Text>
              </View>
              <View style={styles.wrapperForm}>
                <Text style={styles.styleTextHeader}>Diagnostic:</Text>
                <Text style={styles.styleTextNext}>{e.diagnostic}</Text>
              </View>
              <View style={styles.wrapperForm}>
                <Text style={styles.styleTextHeader}>Prescription:</Text>
                <Text style={styles.styleTextNext}>{e.prescription}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {flex: 1, backgroundColor: '#808080', paddingHorizontal: 5},
  wrapper2: {flex: 1, backgroundColor: 'white', paddingHorizontal: 5},
  wrapperForm: {
    flexDirection: 'row',
    paddingLeft: 10,
    marginTop: 0,
    marginBottom: 5,
  },
  styleTextHeader: {
    width: 110,
    fontSize: 13,
    fontFamily: 'monospace',
    color: 'black',
  },
  styleTextNext: {
    width: 230,
    fontSize: 13,
    fontFamily: 'monospace',
    color: 'black',
  },
  wapperDoctorList: {
    marginTop: 10,

    width: '100%',
    backgroundColor: '#EEEEEE',
    borderWidth: 2,
    borderColor: '#FEB04A',
  },
});

function mapStateToProps(state) {
  return {
    dataLogin: state.dataLogin,
    dataMedicalRecord: state.dataMedicalRecord,
  };
}
export default connect(mapStateToProps)(NotifyView);
