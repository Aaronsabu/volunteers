import React, { Component } from 'react';
import { StyleSheet, View, Linking, Platform, TouchableOpacity, TextInput } from 'react-native';
import {Text} from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import * as firebase from 'firebase';
import { database2 } from '../firebase/config';

var data;

const dbRef = database2.ref("users/001");
dbRef.on("value", snapshot => {
  if (snapshot.exists()) {
    data = snapshot.val();
    console.log(data.number);
  } else {
   console.log("No data available");
  }
})

var inf;

const ref = database2.ref("users/002");
ref.on("value", snapshot => {
  if (snapshot.exists()) {
    inf = snapshot.val();
    console.log(inf);
  } else {
   console.log("No data available");
  }
})
 
export default class App extends Component {

  makeCall = () => {

    console.log("SuccessFull");

    let phoneNumber = '';
    let num = data.number;

    console.log("number is " +inf.number)

    if (Platform.OS === 'android') {
      phoneNumber = `tel:${num}`;
    } else {
      phoneNumber = `telprompt:${num}`;
    }

    Linking.openURL(phoneNumber);
  };

   Call = () => {

    let number = '';
    let numb = inf.number;
    console.log("Another Successsfull item");

    if (Platform.OS === 'android') {
      number = `tel:${numb}`;
    } else {
      number = `telprompt:${numb}`;
    }

    Linking.openURL(number);
  };

  render() {

    return (
      <View style={styles.container} >
    <Text style={styles.txt}>Woman</Text>
    <View style={{flexDirection: 'row'}}>
      <Ionicons name="person" style={styles.icon} />
      <TextInput fontSize={20} color="black" style={styles.input} editable={false} value ={data.name} />
      <TouchableOpacity onPress={this.makeCall}><Ionicons name="ios-call" style={styles.icon} /></TouchableOpacity>
    </View>
    <Text style={styles.txt}>Volunteer 2</Text>
    <View style={{flexDirection: 'row'}}>
      <Ionicons name="person" style={styles.icon} /> 
      <TextInput fontSize={20} color="black" style={styles.input} value = {inf.name} editable={false} />
      <TouchableOpacity onPress={this.Call}><Ionicons name="ios-call" style={styles.icon} /></TouchableOpacity>           
    </View>
    <Text style={styles.txt}>Police</Text>
    <View style={{flexDirection: 'row'}}>
      <Ionicons name="person" style={styles.icon} />
      <TextInput fontSize={20} color="black" style={styles.input} editable={false} />
      <TouchableOpacity onPress={this.makeCall}><Ionicons name="ios-call" style={styles.icon} /></TouchableOpacity>
  
    </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop: 65
  },
  txt: {
    marginLeft: 45,
    color: '#d41568'
  },
  icon: {
    fontSize: 44,
    color: "#d41568"
  },
  input: {
    height: 50,
    width: 250,
    borderRadius: 5,
    marginBottom:8,
    marginRight: 8,
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: "stretch",
    borderWidth: 1,
    borderColor: "black"
}
});
