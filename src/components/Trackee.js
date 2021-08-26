import React from 'react';
import { StyleSheet, View, Platform, SafeAreaView } from 'react-native';
import MapView, { Marker, AnimatedRegion, PROVIDER_GOOGLE} from 'react-native-maps';
import * as Location from 'expo-location';
import PubNubReact from 'pubnub-react';


const LATITUDE = 9.4927;
const LONGITUDE = 76.7084;
const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = 0.01;

class Trackee extends React.Component {
  constructor(props) {
    super(props);

    this.pubnub = new PubNubReact({
      publishKey: 'pub-c-28fb07f4-4b2e-48af-be8e-1f496fc4a2fc',
      subscribeKey: 'sub-c-189f2e2a-062e-11ec-b49f-62dfa3a98328',
    });

    this.state = {
      latitude: LATITUDE,
      longitude: LONGITUDE,
      errorMsg: '',
      coordinate: new AnimatedRegion({
        latitude: 9.4927,
        longitude: 76.7084,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }),
    };

    this.pubnub.init(this);
  }

  // code to receive messages sent in a channel
  async componentDidMount() {
    (async () => {
      await Location.requestForegroundPermissionsAsync();
      {Location.hasServicesEnabledAsync ? this.watchLocation() :
        this.setState({errorMsg: 'Permission to access location was denied'})}
      } 
    )();
  };

  async watchLocation() {
     
    this.watchID = await Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10
      },
      position => {
        const { latitude, longitude } = position.coords;
        console.log("Position is" +position.coords.latitude);


        this.setState({
          latitude,
          longitude
        });
        console.log(position);
      }
    )
  };

  componentDidUpdate() {
      this.pubnub.publish({
        message: {
          latitude: this.state.latitude,
          longitude: this.state.longitude
        },
        channel: "location"
      });
  }

  componentWillUnmount() {
    this.watchID.remove();
  }


  getMapRegion = () => ({
    latitude: this.state.latitude,
    longitude: this.state.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA
  });

  render() {
    return (
      //<SafeAreaView style={{ flex: 1 }}>
        <View>
          <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            showUserLocation
            followUserLocation
            loadingEnabled
            ref={c => (this.mapView = c)}
            region={this.getMapRegion()}
          >
            <Marker.Animated
              coordinate={this.state}
            />
          </MapView>
        </View>
      //</SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    height: 1,
    borderWidth: 1
  },
});

export default Trackee;