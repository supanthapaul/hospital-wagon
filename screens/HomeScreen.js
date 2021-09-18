import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState, useRef } from 'react'
import { Text, StyleSheet, View, SafeAreaView, Image } from 'react-native';
import { Button } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_API_KEY} from '@env';
import * as Location from 'expo-location';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin, setTravelTimeInformation } from '../slices/navSlice';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';

export default HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const origin = useSelector(selectOrigin)
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const inputRef = useRef();

  useEffect(() => {
    getLocation();
  }, []);
  useEffect(() => {
    
  }, [navigation]);
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(setOrigin(null));
      dispatch(setDestination(null));
      dispatch(setTravelTimeInformation(null));
      console.log("ON HOME")
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  }
  
  const getLocationObject = () => {
    if(location) {
      return {
        description: 'Current Location',
        geometry: { location: { lat:location.coords.latitude, lng: location.coords.longitude } },
      };
    }
    else {
      getLocation();
      return {
        description: 'Current Location',
        geometry: { location: { lat:23.23, lng: 1.23 } },
      };
    }
  }
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        {/* <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: 'contain'
          }}
          source={{
            uri: 'https://links.papareact.com/gzs'
          }}
        /> */}
        <Text style={tw`pb-2 text-lg`}>Get an ambulance at your doorstep</Text>
        <GooglePlacesAutocomplete
          ref={inputRef}
          placeholder="Where's the emergency?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          fetchDetails={true}
          returnKeyType={'search'}
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              borderColor: "grey",
              padding: 15,
              borderWidth: 2,
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log("Current LOC")
            console.log(data, details);
            dispatch(setOrigin({
              location: details.geometry.location,
              description: data.description
            }));

            dispatch(setDestination(null));
          }}
          query={{
            key: GOOGLE_API_KEY,
            language: 'en',
            
          }}
          predefinedPlaces={[getLocationObject()]}
        />
        <Button
          title="Get an Ambulance"
          buttonStyle={{
            backgroundColor: "red",
            marginTop: 6
          }}
          raised
          disabled={!origin}
          onPress={() => {
            inputRef.current?.clear();
            navigation.navigate("MapScreen")
          }}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
