import AsyncStorage from '@react-native-community/async-storage';
const GetCart = async () => {
  try {
    var value = JSON.parse(await AsyncStorage.getItem('Cart'));
    console.log(value);
    return value;
  } catch (err) {
    console.log(err);
  }
};
export default GetCart;
