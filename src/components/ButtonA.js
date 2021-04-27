import React from 'react';
import {Text,View,StyleSheet,Pressable} from 'react-native';

const ButtonA = ({title,onPress,height,width,top,bottom})=>{

    return (
    <Pressable onPress={onPress}>

    <View style={{
    backgroundColor: "red",
    height:height,
    width:width,
    flexDirection: "row",
    justifyContent: "center",
    marginTop:top,
    marginBottom:bottom
}}>
    <Text style={styles.AlertText}>{title}</Text>
    </View>

    </Pressable>
    );

};

const styles=StyleSheet.create({
 AlertText:{
    fontSize:30,
    alignSelf: "center",
    color: "white",
 }
});
export default ButtonA;