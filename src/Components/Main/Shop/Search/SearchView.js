import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import imgDoc from '../../../../../image/doctor.png';
import GetListDoctorSearch from '../../../../API/Doctor/search-doctor-api';
import {connect} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
const SearchView = (props) => {
  const route = useRoute();
  const navigation = useNavigation();
  const {wrapper} = styles;
  const [arraySearch, setarraySearch] = useState([]);
  const value = 'flor';
  const handleSearchName = () => {
    console.log(props.textSearch);
    GetListDoctorSearch(props.textSearch, 'name')
      .then((json) => {
        var data = JSON.parse(JSON.stringify(json));
        console.log(data);
        // console.log('sadas');
        props.dispatch({
          type: 'setDataDoctor',
          data: data,
        });
      })
      .catch((error) => {});
  };
  const handleSearchExpertise = () => {
    console.log(props.textSearch);
    GetListDoctorSearch(props.textSearch, 'expertise')
      .then((json) => {
        var data = JSON.parse(JSON.stringify(json));
        console.log(data);
        // console.log('sadas');
        props.dispatch({
          type: 'setDataDoctor',
          data: data,
        });
      })
      .catch((error) => {});
  };
  const handleSearchHospital = () => {
    console.log(props.textSearch);
    GetListDoctorSearch(props.textSearch, 'hospital')
      .then((json) => {
        var data = JSON.parse(JSON.stringify(json));
        console.log(data);
        console.log('sadas');
        props.dispatch({
          type: 'setDataDoctor',
          data: data,
        });
      })
      .catch((error) => {});
  };
  const handleDoctorDetail = (e) => {
    // console.log('handleDoctorDetail');
    navigation.navigate('DoctorDetail', {
      e,
    });
  };
  return (
    <View style={wrapper}>
      <View style={{height: 5, backgroundColor: '#808080'}}></View>
      <ScrollView style={styles.wrapper2}>
        <View style={styles.wrapperHeaderSearch}>
          <TouchableOpacity
            style={styles.wrapperBtnSearch}
            onPress={handleSearchName}>
            <Text style={styles.StylteTextSearch}>Name</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.wrapperBtnSearch}
            onPress={handleSearchExpertise}>
            <Text style={styles.StylteTextSearch}>Expertise</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.wrapperBtnSearch}
            onPress={handleSearchHospital}>
            <Text style={styles.StylteTextSearch}>Hospital</Text>
          </TouchableOpacity>
        </View>
        {props.dataDoctor.map((e) => (
          <TouchableOpacity
            style={styles.wapperDoctorList}
            key={e.id}
            onPress={() => {
              handleDoctorDetail(e);
            }}>
            <View style={styles.wrapperDoctorDetail1}>
              <Image source={imgDoc} style={styles.iconStyle}></Image>
              <View style={{paddingLeft: 15}}>
                <View style={styles.wrapperFull}>
                  <Text style={styles.textHeader}>Name:</Text>
                  <Text style={styles.wrapperAddress}>
                    {e.lastName} {e.fistName}
                  </Text>
                </View>

                <View style={styles.wrapperFull}>
                  <Text style={styles.textHeader}>expertise:</Text>
                  <Text style={styles.wrapperAddress}>{e.expertise.name}</Text>
                </View>

                <View style={styles.wrapperFull}>
                  <Text style={styles.textHeader}>hospital:</Text>
                  <Text style={styles.wrapperAddress}>{e.hospital.name}</Text>
                </View>

                <View style={styles.wrapperFull}>
                  <Text style={styles.textHeader}>Address:</Text>
                  <Text style={styles.wrapperAddress}>{e.addressDetail}</Text>
                </View>
              </View>
            </View>

            <View style={styles.wrapperDoctorDetail2}>
              <View style={styles.wrapperFull}>
                <Text style={styles.textHeader2}>Decription:</Text>
                <Text style={styles.textBody}>{e.description}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

function mapStateToProps(state) {
  return {
    textSearch: state.textSearch,
    dataDoctor: state.dataDoctor,
  };
}
export default connect(mapStateToProps)(SearchView);
const styles = StyleSheet.create({
  wrapper: {flex: 1, backgroundColor: '#808080', paddingHorizontal: 5},
  wrapper2: {flex: 1, backgroundColor: 'white', paddingHorizontal: 5},
  textBody: {
    width: 243,
    fontSize: 12,
    fontFamily: 'monospace',
    color: 'black',
  },
  textHeader2: {
    width: 100,
    fontSize: 13,
    fontFamily: 'monospace',
    color: 'black',
  },
  wrapperHeaderSearch: {
    height: 65,
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  wrapperBtnSearch: {
    marginTop: 9,
    height: 40,
    width: '30%',
    backgroundColor: '#C9BE79',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  StylteTextSearch: {
    fontSize: 12,
    fontFamily: 'monospace',
    color: 'black',
  },
  wapperDoctorList: {
    marginBottom: 15,

    width: '100%',
    backgroundColor: '#EEEEEE',
    borderWidth: 2,
    borderColor: '#FEB04A',
  },
  wrapperDoctorDetail1: {
    marginTop: 10,
    flexDirection: 'row',

    paddingHorizontal: 10,
    width: '100%',
  },
  wrapperDoctorDetail2: {
    marginTop: 10,

    width: 350,
    paddingLeft: 15,
  },
  wrapperAddress: {
    width: 180,
    fontSize: 12,
    fontFamily: 'monospace',
    color: 'black',
  },
  textHeader: {
    width: 85,
    fontSize: 13,
    fontFamily: 'monospace',
    color: 'black',
  },
  iconStyle: {
    height: 100,
    width: 100,
  },
  wrapperFull: {
    flexDirection: 'row',
    marginBottom: 7,
  },
  styleText1: {
    fontSize: 12,
    fontFamily: 'monospace',
    color: 'black',
  },
  styleText2: {
    fontSize: 12,
    fontFamily: 'monospace',
    color: 'black',
  },
});
