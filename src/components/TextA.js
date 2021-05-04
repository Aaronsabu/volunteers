import React from 'react';
import {Text,StyleSheet} from 'react-native';

const TextA = ({title,size,Weight})=>{

    return (
    <Text style={{
        color: '#d41568',
        fontSize: size,
        fontWeight: Weight
    }}>
    {title}
    </Text>
  );

};

const styles=StyleSheet.create({});
export default TextA;
