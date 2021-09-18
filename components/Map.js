import React, {useState, useEffect, useRef} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import MapView, {Marker} from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux';
import { selectDestination, selectOrigin, setTravelTimeInformation } from '../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_API_KEY} from '@env';

const Map = () => {
  const origin = useSelector(selectOrigin)
  const destination = useSelector(selectDestination)
  const mapRef = useRef(null);
  const dispatch = useDispatch();


  useEffect(() => {
    if(!origin || !destination) return;

    mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: {top:50, right: 50, bottom: 50, left: 50}
    });
  }, [origin, destination])

  useEffect(() => {
    if(!origin || !destination) return;

    const getTravelTime = async () => {
      const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&destinations=${destination.location.lat},${destination.location.lng}&origins=${origin.location.lat},${origin.location.lng}&key=${GOOGLE_API_KEY}`;
      fetch(URL)
        .then(res => res.json())
        .then(data => {
          dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
      });
    }
    getTravelTime();
  }, [origin, destination, GOOGLE_API_KEY])
  return (
    <MapView
    ref={mapRef}
    style={tw`flex-1`}
    mapType="mutedStandard"
    initialRegion={{
      latitude: origin.location.lat,
      longitude: origin.location.lng,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    }}
  >
    {
      origin && destination && (
        <MapViewDirections 
          lineDashPattern={[0]}
          origin={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          destination={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          apikey={GOOGLE_API_KEY}
          strokeWidth={3}
          strokeColor="red"
        />
      )
    }
    {origin?.location && (
      <Marker 
        coordinate={{
          latitude: origin.location.lat,
          longitude: origin.location.lng,
        }}
        title="Origin"
        description={origin.description}
        identifier="origin"
      />
    )}
    {destination?.location && (
      <Marker 
        coordinate={{
          latitude: destination.location.lat,
          longitude: destination.location.lng,
        }}
        title="Destination"
        description={destination.description}
        identifier="destination"
      />
    )}
  </MapView>
  )
}

export default Map

const styles = StyleSheet.create({})
