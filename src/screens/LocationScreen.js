import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Call from '../components/Call';

const LocationScreen = () => {
    return (
       <View style={styles.container}>
         <Image style={styles.img} source={require('../img/pinkpal.png')} /> 
         <Call />
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
