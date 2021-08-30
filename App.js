import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import DefaultScreen from './src/screens/DefaultScreen';
import AlertScreen from './src/screens/AlertScreen';
import LocationScreen from './src/screens/LocationScreen';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native'
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
} from 'react-native-responsive-screen'


const navigator = createStackNavigator({
  Default: DefaultScreen,
  Alert: AlertScreen,
  Location: LocationScreen,
}, {
  initialRouteName: 'Default',
  defaultNavigationOptions: {
    title: 'Volunteers'
  }
});

const App = createAppContainer(navigator);

export default () => {
  return ( 
    
    
    <App/>
    
  );
};