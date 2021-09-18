import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_API_KEY} from '@env';


const NavigateCard = () => {
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Select Your Hospital</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
              placeholder='Where From?'
              nearbyPlacesAPI="GooglePlacesSearch"
              debounce={400}
              fetchDetails={true}
              returnKeyType={'search'}
              styles={{
                container: {
                  flex: 0,
                },
                textInput: {
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
        </View>
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const styles = StyleSheet.create({})
