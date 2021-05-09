import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const Map = () => {

  return (
    <MapView
      style={styles.map}
      provider={ PROVIDER_GOOGLE }
      initialRegion={{
        latitude: 10.2315,
        longitude: 76.4088,
        latitudeDelta: 0.01,
        longitudeDelta: 0.1
      }}
    >
     <Marker 
       coordinate={{
        latitude: 10.2315,
        longitude: 76.4088
       }}
       animation={true}
     />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 250,
    borderWidth: 170
  }
});

export default Map;

//Api key: AIzaSyCclQ7ik-N4zxrkx9GkcXwqzIc8ccGTJsI