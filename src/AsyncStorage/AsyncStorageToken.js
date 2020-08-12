import AsyncStorage from '@react-native-community/async-storage';
const AsyncStorageToken = async (token) => {
  await AsyncStorage.setItem('@token', token).then(() => {
    console.log(token);
  });
};

export default AsyncStorageToken;
