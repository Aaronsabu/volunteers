import React, { Component } from 'react';
import { Text, StyleSheet, View, Linking, Platform, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class App extends Component {

  makeCall = () => {

    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${1234567890}';
    } else {
      phoneNumber = 'telprompt:${1234567890}';
    }

    Linking.openURL(phoneNumber);
  };

  render() {
    return (
      <View style={styles.container} >
    <Text>Woman</Text>
    <View style={{flexDirection: 'row'}}>
      <TextInput style={styles.input}  />
      <TouchableOpacity onPress={this.makeCall}><Ionicons name="ios-call" size={40} color="red" /></TouchableOpacity>
    </View>
    <Text>Volunteer 2</Text>
    <View style={{flexDirection: 'row'}}>
      <TextInput style={styles.input}  />
      <TouchableOpacity onPress={this.makeCall}><Ionicons name="ios-call" size={40} color="red" /></TouchableOpacity>           
    </View>
    <Text>Police</Text>
    <View style={{flexDirection: 'row'}}>
      <TextInput style={styles.input}  />
      <TouchableOpacity onPress={this.makeCall}><Ionicons name="ios-call" size={40} color="red" /></TouchableOpacity>
  
    </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    marginTop: 350
  },
  input: {
    height: 50,
    width: 250,
    borderRadius: 5,
    marginBottom:8,
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: "stretch",
    borderWidth: 2,
    borderColor: "blue"
}
});


