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
import GetListPost from '../../../../API/Schedule/list-post-api';
const {height} = Dimensions.get('window');

const ListPosts: () => React$Node = () => {
  const navigation = useNavigation();
  const [value, setvalue] = useState([]);
  const [dataPost, setDataPost] = useState([]);
  useEffect(() => {
    async function GetData() {
      GetListPost()
        .then((json) => {
          var dataPost = JSON.parse(JSON.stringify(json));

          console.log(dataPost);
          setDataPost(dataPost.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    GetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.wrapper}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={styles.textStyle}>LIST POST</Text>
        {dataPost.map((e) => (
          <TouchableOpacity
            style={styles.wrapperMain}
            key={e.id}
            onPress={() =>
              navigation.navigate('ListPosts', {
                e,
              })
            }>
            <View style={styles.wrapper2}>
              <Text style={styles.textStyleTitle}>{e.title}</Text>
              <Text style={styles.textStyleConten}>
                {e.content.substr(0, 80)}...
              </Text>
            </View>
            <View style={styles.wrapper4}></View>
            <View style={styles.wrapper3}>
              <View>
                <View style={styles.wrapperTextUnder}>
                  <Text style={styles.textHeader}>Categories: </Text>
                  <Text style={styles.textHeader}>{e.categories[0].name}</Text>
                </View>
                <View style={styles.wrapperTextUnder}>
                  <Text style={styles.textHeader}>Tags: </Text>
                  <Text style={styles.textHeader}>{e.tags[0].name}</Text>
                </View>
              </View>
              <View style={styles.wrapperTextUnder}>
                <Text style={styles.textHeader}>Date: </Text>
                <Text style={styles.textHeader}>
                  {e.createAt.substr(0, 10)} / {e.createAt.substr(11, 5)}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={{flex: 4}}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    // height: height * 0.32,
    backgroundColor: 'white',
    shadowColor: '#424242',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.5,
    padding: 10,
    paddingTop: 0,
  },
  bannerImageStyle: {width: 360, height: 190},
  textStyle: {
    fontSize: 17,
    fontFamily: 'monospace',
    color: 'black',
  },
  wrapperMain: {
    height: 190,
    width: '100%',
    backgroundColor: '#C0C0C0',
    marginTop: 10,
  },
  wrapper2: {
    height: 140,
    alignItems: 'center',
    paddingLeft: 15,
  },
  wrapper4: {
    alignItems: 'center',
  },
  wrapper3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  textStyleTitle: {
    paddingTop: 65,
    fontSize: 22,
    fontFamily: 'monospace',
    color: 'black',
  },
  textStyleConten: {
    fontSize: 12,
    fontFamily: 'monospace',
    color: 'black',
    marginTop: 10,
  },
  wrapperTextUnder: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textHeader: {
    fontSize: 12,
    fontFamily: 'monospace',
    color: 'black',
    opacity: 0.4,
  },
});
export default ListPosts;
