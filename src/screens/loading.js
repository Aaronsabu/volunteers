import React, { useEffect } from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import firebase from 'firebase';

const LoadingScreen = ({navigation}) => {

    useEffect (() => {
        firebase.auth().onAuthStateChanged(user => {
          navigation.navigate(user ? 'Default' : 'Login')
        })
      }, []);

    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#d41568" />
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default LoadingScreen;