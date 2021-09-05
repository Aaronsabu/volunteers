//import '../_MockLocation';
import React, {useEffect} from 'react';
import { View, StyleSheet, Image} from 'react-native';
import Call from '../components/Call';
import Tracker from '../components/Tracker';
import Trackee from '../components/Trackee';
import { ScrollView } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//import useLocation from '../hooks/useLocation';

const LocationScreen = () => {
    //const [errorMsg] = useLocation(isFocused);


    return (
        //<ScrollView>
       <View style={styles.container}>
         <Image style={styles.img} source={require('../img/pinkpal.png')} /> 
          
         <Tracker />
         <Call />
         <Trackee />
       </View>
       //</ScrollView>
       
    );
};

const styles = StyleSheet.create({
    container: {
        //flex:1,

        height: hp('85%'), // 70% of height device screen
  // width: wp('95%') ,  // 80% of width device screen
       //marginTop:4,
       marginBottom:20,
      alignItems: 'center',
        
    },
    img: {
     // justifyContent: 'center',
    // alignItems: 'center',
      // flex:1,
      //  marginleft:50,
       height: 70,
        width: 100
    }
});

export default LocationScreen;


