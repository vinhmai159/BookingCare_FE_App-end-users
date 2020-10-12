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

const SearchView = (props) => {
  const {wrapper} = styles;
  const [arraySearch, setarraySearch] = useState([]);
  const value = 'flor';

  return <View style={wrapper}></View>;
};

function mapStateToProps(state) {
  return {temp: state.search};
}
export default SearchView;
const styles = StyleSheet.create({
  wrapper: {flex: 1, padding: 6, backgroundColor: 'red'},
});
