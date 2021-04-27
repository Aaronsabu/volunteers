import React from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import { Foundation } from '@expo/vector-icons';

const AlertScreen = ({ navigation}) => {
    return (
        <View style={styles.container}>
         <Image style={styles.img} source={require('../img/pinkpal.png')} /> 
         <View style={styles.view}>
           <Text style={styles.text}>ALERT</Text>
           <Foundation name="alert" size={60} color="red" />
         </View>
         <Button style={styles.button} title="I'm Ready" onPress={() => navigation.navigate('Location')} />
         <Button title="Not Available" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop:10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        height: 50,
        width: 100
    },
    view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:10,
        marginBottom: 10
    },
    text: {
        fontSize: 50,
        color: 'red',
        marginRight:10
    },
    button: {
        width: 100,
        height: 100,
        padding: 20
    }
});

export default AlertScreen;
