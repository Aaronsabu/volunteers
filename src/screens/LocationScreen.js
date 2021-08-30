//import '../_MockLocation';
import React, {useEffect} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Call from '../components/Call';
import Tracker from '../components/Tracker';
import Trackee from '../components/Trackee';
//import useLocation from '../hooks/useLocation';

const LocationScreen = () => {
    //const [errorMsg] = useLocation(isFocused);


    return (
       <View style={styles.container}>
         <Image style={styles.img} source={require('../img/pinkpal.png')} /> 
          
         <Tracker />
         <Call />
         <Trackee />
       </View>
    );
};

LocationScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };

const styles = StyleSheet.create({
    container: {
        paddingTop:20,
        flex: 1,
        alignItems: 'center',
        
    },
    img: {
        height: 70,
        width: 100
    }
});

export default LocationScreen;


