import AsyncStorage from '@react-native-community/async-storage';
const getAsyncStorage = async (value) => {
  value = await AsyncStorage.getItem('@token').then(() => {
    console.log(value);
  });
};

export default getAsyncStorage;
