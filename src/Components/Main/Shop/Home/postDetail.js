import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
const PostDetails = () => {
  var temp = '   ';
  const route = useRoute();
  const navigation = useNavigation();
  const {id, content, title, createAt} = route.params.e;
  return (
    <View>
      <View style={styles.wrapperHeader}>
        <Text style={styles.textHeader}>{title}</Text>
      </View>
      <View style={styles.wrapperheader2}>
        <View style={styles.wrapperTextUnder}>
          <Text style={styles.textHeader2}>Date: </Text>
          <Text style={styles.textHeader2}>22/11/2000</Text>
        </View>
        <View style={styles.wrapperTextUnder}>
          <Text style={styles.textHeader2}>Date: </Text>
          <Text style={styles.textHeader2}>
            {createAt.substr(0, 10)} / {createAt.substr(11, 5)}
          </Text>
        </View>
      </View>
      <View style={styles.wrapperContent}>
        <Text style={styles.textContent}>
          {temp}
          {content}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapperHeader: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  textHeader: {
    fontSize: 24,
    fontFamily: 'monospace',
    color: 'black',
  },
  textContent: {
    fontSize: 16,
    fontFamily: 'monospace',
    color: 'black',
  },
  wrapperContent: {
    paddingHorizontal: 10,
  },
  wraperDate: {
    flexDirection: 'row',
  },
  wrapperTextUnder: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textHeader2: {
    fontSize: 12,
    fontFamily: 'monospace',
    color: 'black',
  },
  wrapperheader2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
});
export default PostDetails;
