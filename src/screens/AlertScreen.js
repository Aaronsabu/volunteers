import React from 'react';
import {View, StyleSheet, Image,SafeAreaView } from 'react-native';
import { Foundation } from '@expo/vector-icons';
import ButtonA from "../components/ButtonA";
import TextA from "../components/TextA";
import { Dimensions } from 'react-native';

const AlertScreen = ({ navigation}) => {
    return (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
        <Image style={styles.img} source={require('../img/pinkpal.png')} /> 
        <View style={styles.view}>
        <TextA title="ALERT" size={50} />
         <Foundation name="alert" size={50} color="#d41568" />
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
       </SafeAreaView>
    );
}
       // const { width, height } = Dimensions.get("window")


const styles = StyleSheet.create({
    container: {
        
        //width: "100%",
        //aspectRatio: 9 / 10,  
    
        marginTop:50,
        marginBottom:50,
        alignItems: 'center',
        justifyContent: 'center',
        
        
    },
    img: {
        height: 60,
        width: 110,
        marginTop:10
    },
    view: {
        
        //width: width * 0.8, 
       // height: height * 0.2 
        flexDirection: 'row',
       justifyContent: 'space-between',
       marginVertical:30,
       marginHorizontal:30

    },
    Button:{
        height:120,
        width:250,
        marginTop:70,
        marginBottom:50,
        backgroundColor:"#d41568",
        fontSize: 30,
        borderRadius:10
    }
});

export default AlertScreen;
