import React from 'react';
import {Text,View,StyleSheet,Pressable} from 'react-native'

const ButtonA=({title,onPress,style})=>{
    let {height,width,marginTop,marginBottom,backgroundColor,fontSize,borderRadius}=style 
    return (
    <Pressable onPress={onPress}>

    <View style={{
    backgroundColor: backgroundColor,
    height:height,
    width:width,
    flexDirection: "row",
    justifyContent: "center",
    marginTop:marginTop,
    marginBottom:marginBottom,
    borderRadius: borderRadius
}}>
    <Text style={{
    fontSize: fontSize,
    alignSelf: "center",
    color: "white"
}}>
{title}
</Text>
    </View>

    </Pressable>)

}

const styles=StyleSheet.create({})
export default ButtonA