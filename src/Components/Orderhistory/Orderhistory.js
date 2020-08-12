import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import backSpecial from '../../../images/appIcon/backs.png';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
function mapStateToProps(state) {
  return {arrayInfor: state.arrayInfor};
}
const Orderhistory = (props) => {
  const navigation = useNavigation();
  const {wrapper, header, headerTitle, backIconStyle, body, orderRow} = styles;
  const [arrayHistory, setarrayHistory] = useState([]);
  var value = '';
  {
    props.arrayInfor.map((e) => (value = e.token));
  }
  useEffect(() => {
    fetch('http://192.168.1.31/WebService/app/order_history.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: value,
      }),
    })
      .then((response) => response.json())
      .then((json) => setarrayHistory(json))
      .catch((error) => console.error(error));
  });
  return (
    <View style={wrapper}>
      <View style={header}>
        <View />

        <Text style={headerTitle}>Order History</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={backSpecial} style={backIconStyle} />
        </TouchableOpacity>
      </View>
      <View style={body}>
        <ScrollView>
          {arrayHistory.map((e) => (
            <View style={orderRow}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: '#9A9A9A', fontWeight: 'bold'}}>
                  Order id:
                </Text>
                <Text style={{color: '#2ABB9C'}}>{e.id}</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: '#9A9A9A', fontWeight: 'bold'}}>
                  OrderTime:
                </Text>
                <Text style={{color: '#C21C70'}}>{e.date_order}</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: '#9A9A9A', fontWeight: 'bold'}}>
                  Status:
                </Text>
                <Text style={{color: '#2ABB9C'}}>{e.status}</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: '#9A9A9A', fontWeight: 'bold'}}>
                  Total:
                </Text>
                <Text style={{color: '#C21C70', fontWeight: 'bold'}}>
                  {e.total}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  wrapper: {flex: 1, backgroundColor: '#fff'},
  header: {
    flex: 1,
    backgroundColor: '#2ABB9C',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
  }, // eslint-disable-line
  headerTitle: {fontFamily: 'Avenir', color: '#fff', fontSize: 20},
  backIconStyle: {width: 30, height: 30},
  body: {flex: 10, backgroundColor: '#F6F6F6'},
  orderRow: {
    height: width / 3,
    backgroundColor: '#FFF',
    margin: 10,
    shadowOffset: {width: 2, height: 2},
    shadowColor: '#DFDFDF',
    shadowOpacity: 0.2,
    padding: 10,
    borderRadius: 2,
    justifyContent: 'space-around',
  },
});

export default connect(mapStateToProps)(Orderhistory);
