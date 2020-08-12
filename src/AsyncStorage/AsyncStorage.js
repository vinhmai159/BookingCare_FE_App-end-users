import AsyncStorage from '@react-native-community/async-storage';
const saverCarts = async (cartArray) => {
  await AsyncStorage.setItem('Cart', JSON.stringify(cartArray)).then(() => {
    console.log(JSON.stringify(cartArray));
  });
};
export default saverCarts;
