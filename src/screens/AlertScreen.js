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
        style={styles.Button}
        title="I am Ready"
        onPress={() => navigation.navigate('Location')}/>
        <ButtonA 
        style={styles.Button}
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
        height: "12%",
        width: "36%",
        marginTop:"3%"
    },
    view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical:"6%"
    },
    Button:{
        height:100,
        width:280,
        marginTop:"15%",
        backgroundColor:"red",
        fontSize: 40,
        borderRadius:10
    }
});

export default AlertScreen;