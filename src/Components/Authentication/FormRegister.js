import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';
import registerAPI from '../../API/User/register-api';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const App = (props) => {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setemail] = useState('');
  const [mk, setmk] = useState('');
  const [mk2, setmk2] = useState('');

  const RegisterSuccess = () => {
    props.dispatch({
      type: 'setLogin',
    });
  };
  const HandleRegister = () => {
    // registerAPI('maithevien4@gmail.com', 'string', 'string', 'abc123!@#QWE')
    if (mk2 === mk) {
      registerAPI(email, firstName, lastName, mk)
        .then((json) => {
          var DataLoginUser = JSON.parse(JSON.stringify(json));
          // console.log(DataLoginUser);

          if (DataLoginUser.error === 'Bad Request') {
            Alert.alert(
              'Nofity',
              'Not Success: ' + DataLoginUser.error,

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
              'Success',
              [
                {
                  text: 'Cancel',
                  onPress: () => {
                    RegisterSuccess();
                    console.log('OK Pressed');
                  },
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              {cancelable: false},
            );
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
        'Re-Enter Your PassWord false',
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
        style={styles.textInput}
        placeholder="Your Email"
        onChangeText={(text) => setemail(text)}
        value={email}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Your Last Name"
        onChangeText={(text) => setlastName(text)}
        value={lastName}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Your First Name"
        onChangeText={(text) => setfirstName(text)}
        value={firstName}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Your PassWord"
        onChangeText={(text) => setmk(text)}
        value={mk}
        secureTextEntry
      />
      <TextInput
        style={styles.textInput}
        placeholder="Re-Enter Your PassWord"
        onChangeText={(text) => setmk2(text)}
        value={mk2}
        secureTextEntry
      />
      <TouchableOpacity style={styles.Button} onPress={HandleRegister}>
        <Text style={styles.Text2}>SIGN UP</Text>
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
