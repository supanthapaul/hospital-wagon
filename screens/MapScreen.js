import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Map from '../components/Map';
import NavigateCard from '../components/NavigateCard';
import AmbulanceOptionsCard from '../components/AmbulanceOptionsCard';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/core';


export default MapScreen = () => {
  const navigation = useNavigation();
  const Stack = createNativeStackNavigator();

    return (
      <View>
        <TouchableOpacity 
          onPress={() => navigation.navigate("HomeScreen")}
          style={tw`bg-gray-100 absolute top-12 left-8 z-50 p-3 rounded-full shadow-lg`}>
          <Icon name="menu"/>
        </TouchableOpacity>
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
