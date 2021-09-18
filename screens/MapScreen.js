import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Map from '../components/Map';
import NavigateCard from '../components/NavigateCard';
import AmbulanceOptionsCard from '../components/AmbulanceOptionsCard';


export default MapScreen = () => {
  const Stack = createNativeStackNavigator();

    return (
      <View>
        <View style={tw`h-1/2`}>
          <Map />
        </View>
        <View style={tw`h-1/2`}>
          <Stack.Navigator>
            <Stack.Screen
              name="NavigateCard"
              component={NavigateCard}
              options={{
                headerShown:false
              }}
            />
            <Stack.Screen
              name="AmbulanceOptionsCard"
              component={AmbulanceOptionsCard}
              options={{
                headerShown:false
              }}
            />
          </Stack.Navigator>
        </View>
      </View>
    )
  }

const styles = StyleSheet.create({})
