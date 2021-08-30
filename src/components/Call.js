import React, { Component } from 'react';
import { Text, StyleSheet, View, Linking, Platform, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

//var data;

//const dbRef = firebase.database().ref("users/002");
//dbRef.on("value", snapshot => {
  //if (snapshot.exists()) {
    //data = snapshot.val();
  //} else {
   //console.log("No data available");
  //}
//})

 
export default class App extends Component {

  makeCall = () => {

    let phoneNumber = '';
    let num = data.number;

    if (Platform.OS === 'android') {
      phoneNumber = `tel:${num}`;
    } else {
      phoneNumber = `telprompt:${num}`;
    }

    Linking.openURL(phoneNumber);
  };

  render() {
    return (
      <View style={styles.container} >
    <Text style={styles.txt}>Woman</Text>
    <View style={{flexDirection: 'row'}}>
      <Ionicons name="person" style={styles.icon} />
      <TextInput style={styles.input}  />
      <TouchableOpacity onPress={this.makeCall}><Ionicons name="ios-call" style={styles.icon} /></TouchableOpacity>
    </View>
    <Text style={styles.txt}>Volunteer 2</Text>
    <View style={{flexDirection: 'row'}}>
      <Ionicons name="person" style={styles.icon} /> 
      <TextInput style={styles.input}  />
      <TouchableOpacity onPress={this.makeCall}><Ionicons name="ios-call" style={styles.icon} /></TouchableOpacity>           
    </View>
    <Text style={styles.txt}>Police</Text>
    <View style={{flexDirection: 'row'}}>
      <Ionicons name="person" style={styles.icon} />
      <TextInput style={styles.input}  />
      <TouchableOpacity onPress={this.makeCall}><Ionicons name="ios-call" style={styles.icon} /></TouchableOpacity>
  
    </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    marginLeft:10,
    marginTop: 10,
    marginBottom:20,
    marginRight:10
    
  },
  txt: {
    marginLeft: 45
  },
  icon: {
    
    fontSize: 50,
    color: "red"
  },
  input: {
    fontSize:25,
  marginTop:10,
    height: 50,
    width: 260,
    borderRadius: 5,
    marginBottom:10,
    //marginRight:10,
    //marginLeft:10,
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: "stretch",
    borderWidth: 1,
    borderColor: "black"
}
});


