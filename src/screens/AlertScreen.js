import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import { Foundation } from '@expo/vector-icons';

const AlertScreen = ({ navigation}) => {
    return <View style={styles.container}>
        <Image style={styles.img} source={require('../img/pinkpal.png')} /> 
        <View style={styles.view}>
         <Text style={styles.text}>ALERT</Text>
         <Foundation name="alert" size={50} color="red" />
        </View>
        <Button title="I AM READY" onPress={() => navigation.navigate('Location')} />
          <Button title="Not availible" />  
    </View>
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
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 50,
        color: 'red',
    }
});

export default AlertScreen;
