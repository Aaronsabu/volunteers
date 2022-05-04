import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker, AnimatedRegion, PROVIDER_GOOGLE} from 'react-native-maps';
import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';   
import PubNubReact from 'pubnub-react';

const LOCATION_TASK_NAME = "background-location-task";

let lat;
let long;

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
  
  _getLocationAsync = async () => {

    await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
      accuracy: Location.Accuracy.BestForNavigation,
      distanceInterval: 10,
      timeInterval: 10000
    });
     
    this.watchID = await Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.BestForNavigation,
        timeInterval: 10000,
        distanceInterval: 10
      },
      position => {
        const { latitude, longitude } = position.coords;
        console.log("Position is " +position.coords.latitude);


        this.setState({
          latitude,
          longitude
        });
        console.log("Foreground pos ",position);
      }
    );

    this.setState({
      latitude: lat,
      longitude: long
      }); 
  };

    async componentDidMount() {
      // Asking for device location permission
      (async () => {
        const locf = await Location.requestForegroundPermissionsAsync();
        const locb = await Location.requestBackgroundPermissionsAsync();

        if( locf.status !== 'granded' && locb.status !== 'granded') {
          this.setState({errorMsg: 'Permission to access location was denied'})
          console.log("Location not accessed");    
        } else {
          this._getLocationAsync()
        }
      } 
      )();
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

    // const user = firebase.auth().currentUser;
    // let userId = user.uid;
    // let userRef = database2.ref('users/location');
    // userRef.child('volunteer').update({'latitude': this.state.latitude, 'longitude': this.state.longitude})
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
              coordinate={this.state.coordinate}
            />
          </MapView>
        </View>
      //</SafeAreaView>
    );
  }
};

TaskManager.defineTask(LOCATION_TASK_NAME, async ({ data, error }) => {
  if (error) {
    console.log(error);
    return;
  }
  if (data) {
    const { locations } = data;
    let lat = locations[0].coords.latitude;
    let long = locations[0].coords.longitude;
    console.log("latitude & Longitude ", lat,long);
  }
});

const styles = StyleSheet.create({
 map: {
    height: 1,
    borderWidth: 1
  },
});

export default Trackee;
