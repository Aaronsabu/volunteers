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

const styles = StyleSheet.create({
    container: {
        marginTop:5,
        alignItems: 'center',
        
    },
    img: {
        height: 70,
        width: 100
    }
});

export default LocationScreen;


