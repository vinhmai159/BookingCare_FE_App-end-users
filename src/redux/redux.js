import {createStore, combineReducers} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
// var dataLogin = AsyncStorage.getItem('@save');
var dataLogin = {};
//var dataLogin = JSON.parse(AsyncStorage.getItem('@save'));

// console.log('Get Local' + dataLogin);

var arrUser = [];
var dataCheckLoginRe = true;
var dataCheckLoginSuccess = false;
var dataInforUser = {};
var ListDocter = [];
var textSearch = '';
var dataDoctor = [];
var arrChedule = {
  MONDAY: [],
  TUESDAY: [],
  WEDNESDAY: [],
  THURSDAY: [],
  FRIDAY: [],
  SATURDAY: [],
  SUNDAY: [],
};
var dataMedicalRecord = [
  {
    createAt: '',
    diagnostic: '',
    id: '',
    prescription: '',
    symptoms: '',
    updateAt: '',
    user: [''],
  },
  {
    createAt: '',
    diagnostic: '',
    id: '',
    prescription: '',
    symptoms: '',
    updateAt: '',
    user: [''],
  },
];
const dataMedicalRecordReducer = (state = dataMedicalRecord, action) => {
  if (action.type === 'setdataMedicalRecord') {
    return action.data;
  }
  return state;
};
const arrCheduleReducer = (state = arrChedule, action) => {
  if (action.type === 'setSchedule') {
    return action.data;
  }
  return state;
};
const dataDoctorReducer = (state = dataDoctor, action) => {
  if (action.type === 'setDataDoctor') {
    return action.data;
  }
  return state;
};
const textSearchReducer = (state = textSearch, action) => {
  if (action.type === 'setTextSearch') {
    console.log(action.data);
    return action.data;
  }
  return state;
};
const ListDocterReducer = (state = ListDocter, action) => {
  if (action.type === 'setListDocter') return action.data;
  return state;
};
const dataInforUserReducer = (state = dataInforUser, action) => {
  if (action.type === 'dataInforUser') return action.data;
  return state;
};
const dataLoginReducer = (state = dataLogin, action) => {
  if (action.type === 'setDataLogin') return action.data;
  return state;
};
const dataCheckLoginReReducer = (state = dataCheckLoginRe, action) => {
  if (action.type === 'setLogin') return true;
  if (action.type === 'setRegister') return false;
  return state;
};
const dataCheckLoginSuccessReducer = (
  state = dataCheckLoginSuccess,
  action,
) => {
  if (action.type === 'setLoginSuccess') return true;
  if (action.type === 'setLogout') return false;
  return state;
};
const arrUserReducer = (state = arrUser, action) => {
  if (action.type === 'SetData') return action.data;
  return state;
};
const reducer = combineReducers({
  arrUser: arrUserReducer,
  dataCheckLoginRe: dataCheckLoginReReducer,
  dataCheckLoginSuccess: dataCheckLoginSuccessReducer,
  dataLogin: dataLoginReducer,
  dataInforUser: dataInforUserReducer,
  ListDocter: ListDocterReducer,
  textSearch: textSearchReducer,
  dataDoctor: dataDoctorReducer,
  arrChedule: arrCheduleReducer,
  dataMedicalRecord: dataMedicalRecordReducer,
});
const store = createStore(reducer);

export default store;
