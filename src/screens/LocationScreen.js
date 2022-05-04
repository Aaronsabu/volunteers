//import '../_MockLocation';
import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, RefreshControl, ScrollView} from 'react-native';
import Call from '../components/Call';
import Tracker from '../components/Tracker';
import Trackee from '../components/Trackee';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//import useLocation from '../hooks/useLocation';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

const LocationScreen = () => {

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
      }, []);


    return (
       <View style={styles.container}>
         <ScrollView
           contentContainerStyle={styles.scrollView}
           refreshControl={
           <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
           }
         >
         <Image style={styles.img} source={require('../img/pinkpal.png')} /> 
          
         <Tracker />
         <Call />
         <Trackee />
         </ScrollView>
       </View>
    );
};

// LocationScreen.navigationOptions = () => {
//     return {
//       headerShown: false,
//     };
//   };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: hp('85%'),
        marginBottom:20,
        alignItems: 'center',
        
    },
    scrollView: {
        alignItems: 'center',
        justifyContent: 'center',
      },
    img: {
        height: 70,
        width: 100,
        alignItems: 'center'
    }
});

export default LocationScreen;


