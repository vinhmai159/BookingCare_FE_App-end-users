import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import icBack from "../../../image/back.png"; 
import {connect} from 'react-redux';
const {height} = Dimensions.get('window');

const Schedule = (props) => {
  const navigation = useNavigation();

  const Handleback =()=>{
      navigation.goBack();
  }
 
  return (  
    <View> 

        <View style= {styles.wrapperHeader}>
            <TouchableOpacity style = {styles.wrapperBack} onPress={Handleback}>
                <Image source={icBack} style={styles.wrapperBack}></Image>
            </TouchableOpacity>
            <Text style ={styles.styleText}>Schedules</Text>
            <View style={{ width: 30}}></View>
        </View>
        <View style = {styles.wrapperMain}>

           <ScrollView style={styles.wrapper2}>
               {props.SchedulesData.map((e) => (
                       <View style={styles.wapperDoctorList} key = {e.id} >
                       <View style={{marginTop: 10, paddingBottom: 10}}>
                           <View style={styles.wrapperForm}>
                                <Text style={styles.styleTextHeader}>Doctor:</Text>
                               <Text style={styles.styleTextNext}>{e.schedule.doctor.lastName} {e.schedule.doctor.fistName}</Text>
                           </View>
                           <View style={styles.wrapperForm}>
                               <Text style={styles.styleTextHeader}>Time:</Text>
                               <Text style={styles.styleTextNext}>{e.schedule.calender.timeslot.name}</Text>
                            </View>
                           <View style={styles.wrapperForm}>
                                <Text style={styles.styleTextHeader}>Day:</Text>
                               <Text style={styles.styleTextNext}>{e.schedule.calender.day}</Text>
                           </View>
                           <View style={styles.wrapperForm}>
                                <Text style={styles.styleTextHeader}>Date:</Text>
                               <Text style={styles.styleTextNext}>{new Date(e.date).toString().slice(0,16)} </Text>
                           </View>    
                           <View style={styles.wrapperForm}>
                                <Text style={styles.styleTextHeader}>Address:</Text>
                               <Text style={styles.styleTextNext}>{e.schedule.doctor.addressDetail}</Text>
                           </View>                      
                       </View>
                   </View>
               ))}
        
            
    
      </ScrollView>
        </View>
    </View>
  );  
};



const styles = StyleSheet.create({
  wrapperHeaderT:{
      height: "30%",
      backgroundColor:"yellow",
      alignItems:"center",
      justifyContent: "center",
  },
  styleText:{
    fontSize: 29,
    fontFamily: 'monospace',
    color: 'black',
  },
  wrapperHeader:{
    height: height / 8,
    backgroundColor: '#FEB04A',
    alignItems:"center",
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal:"5%",
  },
  wrapperBack:{
    alignItems:"center",
    justifyContent: "center",

  },
  wrapperBack:{
      height:25,
      width:25,
  },
  wrapperMain:{
    height: 7*height / 8,
  },
  wrapperList:{
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal:"5%",
    height: height / 8,
    width:"100%",
    backgroundColor:"yellow",
  },
  wrapper: {flex: 1, backgroundColor: '#808080', paddingHorizontal: 5},
  wrapper2: {flex: 1, backgroundColor: 'white', paddingHorizontal: 5},
  wrapperForm: {
    flexDirection: 'row',
    paddingLeft: 10,
    marginTop: 0,
    marginBottom: 5,
  },
  styleTextHeader: {
    width: 110,
    fontSize: 13,
    fontFamily: 'monospace',
    color: 'black',
  },
  styleTextNext: {
    width: 230,
    fontSize: 13,
    fontFamily: 'monospace',
    color: 'black',
  },
  wapperDoctorList: {
    marginTop: 10,

    width: '100%',
    backgroundColor: '#EEEEEE',
    borderWidth: 2,
    borderColor: '#FEB04A',
  },
});


function mapStateToProps(state) {
    return {  
      SchedulesData: state.SchedulesData,
    };
}

export default connect(mapStateToProps)(Schedule);