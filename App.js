import { StatusBar } from 'expo-status-bar';
import {useState, useEffect} from 'react';
import { StyleSheet, Text, View,Alert } from 'react-native';
import MapView, {Marker} from 'react-native-maps';

import * as Location from 'expo-location';

export default function App() {
  const [region, setRegion] = useState({
    latitude: 60.200692,
    longitude: 24.934302,
    latitudeDelta: 0.0322,
    longitudeDelta: 0.0221,

  })
  const [location, setLocation] = useState(null); 

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted'){
      Alert.alert('No premission to get location')
      return;
    } 

    const location = await Location.getCurrentPositionAsync({});
    setLocation(location.coords);
   }

   useEffect(() => {getLocation()}, []);


  return (
    <View style={styles.container}>
      <MapView
         style= {{width: "100%", height: "100%" }}
         region={region}
         >
         <Marker
         coordinate={{
          latitude: 60.201373, 
          longitude: 24.934041}}
          title='Haaga-Helia' 
         
       
          />
         </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
