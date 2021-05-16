import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import { Foundation } from '@expo/vector-icons';
import ButtonA from "../components/ButtonA";
import TextA from "../components/TextA";

const AlertScreen = ({ navigation}) => {
    return <View style={styles.container}>
        <Image style={styles.img} source={require('../img/pinkpal.png')} /> 
        <View style={styles.view}>
        <TextA title="ALERT" size={50} />
         <Foundation name="alert" size={70} color="#d41568" />
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
        onPress={() => navigation.navigate('Default')}/>

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
    },
    Button:{
        height:120,
        width:250,
        marginTop:70,
        backgroundColor:"#d41568",
        fontSize: 30,
        borderRadius:10
    }
});

export default AlertScreen;
