import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DefaultScreen = ({ navigation }) => {
    return <View style={styles.container}>
        <Ionicons name="person" size={26} color="black" />
        <Image style={styles.img} source={require('../img/pinkpal.png')} />
        <Text style={styles.txt}>Thank you for being a PinkPal volunteer.</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Alert')}>
            <Text style={styles.Buttontext}>Press</Text>
        </TouchableOpacity>
    </View>
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 5,
        marginTop: 5
    },
    img: {
        marginLeft: 25,
        marginTop: 15
    },
    txt: {
        color: 'red',
        fontSize: 18,
        textAlign: 'center'
    },
    Buttontext: {
        color: 'red',
        fontSize: 18,
        textAlign: 'center'
    }
});

export default DefaultScreen;
