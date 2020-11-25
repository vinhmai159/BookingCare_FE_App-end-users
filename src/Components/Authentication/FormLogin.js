import React from 'react';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';
import LoginAPI from '../../API/User/login-api';
import SaveDataLogin from '../../AsyncStorage/SaveDataLogin';
const App = (props) => {
  const [emailLogin, setemailLogin] = React.useState('');
  const [mkLogin, setmkLogin] = React.useState('');
  const navigation = useNavigation();
  const handlerLoginSuccess = () => {
    props.dispatch({
      type: 'setLoginSuccess',
    });
  };
  const handlerLogin = () => {
    if (emailLogin !== '' && mkLogin !== '') {
      LoginAPI(emailLogin, mkLogin)
        .then((json) => {
          var DataLoginUser = JSON.parse(JSON.stringify(json));
          //console.log(DataLoginUser);

          if (DataLoginUser.error === 'Unauthorized') {
            Alert.alert(
              'Nofity',
              'Not Success: ' +
                DataLoginUser.error +
                ' / ' +
                emailLogin +
                ' / ' +
                mkLogin,

              [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {
                  text: 'OK',
                  onPress: () => {
                    console.log('OK Pressed');
                  },
                },
              ],
              {cancelable: false},
            );
          } else {
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
            SaveDataLogin(DataLoginUser);
            props.dispatch({
              type: 'setDataLogin',
              data: DataLoginUser,
            });
            handlerLoginSuccess();
            navigation.navigate('Home');
          }
        })
        .catch((error) => {
          Alert.alert(
            'Nofity',
            'hi' + error,
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          );
        });
    } else {
      Alert.alert(
        'Nofity',
        'Please input Data Login',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
    }
  };
  return (
    <View style={styles.wrapperInput}>
      <TextInput
        onChangeText={(text) => setemailLogin(text)}
        value={emailLogin}
        style={styles.textInput}
        placeholder="User Name"
      />
      <TextInput
        onChangeText={(text) => setmkLogin(text)}
        value={mkLogin}
        style={styles.textInput}
        placeholder="PassWord"
      />
      <TouchableOpacity style={styles.Button} onPress={handlerLogin}>
        <Text style={styles.Text2}>SIGN IN</Text>
      </TouchableOpacity>
    </View>
  );
};
export default connect()(App);

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 10,
    flex: 1,
    backgroundColor: '#088A68',
  },
  wrapperInput: {
    height: 300,
    alignItems: 'center',
    paddingTop: 100,
  },

  textInput: {
    height: 50,
    width: 366,
    backgroundColor: 'white',
    borderColor: '#808080',
    borderWidth: 1,
    paddingLeft: 20,
    marginBottom: 15,
    fontSize: 13,
    borderRadius: 25,
  },

  Button: {
    height: 50,
    width: 366,
    backgroundColor: 'white',
    borderColor: '#808080',
    borderWidth: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    color: '#BDBDBD',
  },
  Text2: {
    color: 'black',
  },
});
