import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import { Foundation } from '@expo/vector-icons';

import ButtonA from "../Components/ButtonA";
import TextA from "../Components/TextA";

const AlertScreen = ({ navigation}) => {
    return <View style={styles.container}>
        <Image style={styles.img} source={require('../img/pinkpal.png')} /> 
        <View style={styles.view}>
        <TextA title="ALERT" size={50} />
         <Foundation name="alert" size={70} color="red" />
        </View>
    
       <TextA title="Someone near you needs help!!" size={24} weight="bold"/>
       <TextA title="Are you willing to help?" size={24} weight="bold"/>
     
        <ButtonA 
        height={120} width={250} top={80} 
        title="I am Ready"
        onPress={() => navigation.navigate('Location')}/>
        <ButtonA 
        height={120} width={250} top={60} 
        title="Not Available" 
        onPress={() => navigation.navigate('Location')}/>

        </View>
};

const styles = StyleSheet.create({
    container: {
        marginTop:10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        height: 60,
        width: 110,
        marginTop:20
    },
    view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical:30
    }
});

export default AlertScreen;