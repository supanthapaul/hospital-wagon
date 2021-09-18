import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_API_KEY} from '@env';
import { useDispatch, useSelector } from 'react-redux';
import { selectOrigin, setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/core';


const NavigateCard = () => {
  const origin = useSelector(selectOrigin)
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Select Your Hospital</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
              placeholder='Find hospital near you...'
              nearbyPlacesAPI="GooglePlacesSearch"
              debounce={400}
              fetchDetails={true}
              returnKeyType={'search'}
              styles={hospitalSearchBoxStyles}
              enablePoweredByContainer={false}
              onPress={(data, details = null) => {
                console.log(data, details);
                dispatch(setDestination({
                  location: details.geometry.location,
                  description: data.description
                }));
                navigation.navigate("AmbulanceOptionsCard");
              }}
              query={{
                key: GOOGLE_API_KEY,
                language: 'en',
                location:`${origin.location.lat},${origin.location.lng}`,
                type:"establishment",
                types:["hospital", "health"],
                radius:10000,
                keyword: "(emergency) AND ((medical centre) OR hospital) AND (24 hours)"
              }}
            />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const hospitalSearchBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0
  }
})
