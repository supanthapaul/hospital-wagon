//import {NavigationContainer} from '@react-navigation/native';
import React, { Component } from 'react';
import { LogBox, Platform, SafeAreaView } from 'react-native';
import { Text } from 'react-native-elements';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import Sawo from 'react-native-sawo';
//import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
import Logo from '../assets/logo.png';
import { Button } from 'react-native-elements';


//import {createStackNavigator} from '@react-navigation/stack';

export default LoginScreen = () =>{
  //const Stack = createNativeStackNavigator();
  const LOGO = Image.resolveAssetSource(Logo).uri;
  return(
    <><Image
    source={{ uri: LOGO }}
    style={{ width: 400, height: 400 }}
  />
  <SafeAreaView style = {{flex:0.5 ,paddingLeft: 50, paddingRight: 50, paddingTop: 30}}>
    <Text style = {{textAlign : 'center', fontSize:30}}>Get an ambulance right at your doorstep, fast.</Text>
  </SafeAreaView>
  <SafeAreaView style = {{flex:0.5 ,paddingLeft: 50, paddingRight: 50}}>
    <Button
    buttonStyle = {{backgroundColor: '#3DB2FF'}}
    title = "Proceed to login"
    titleStyle = {{fontSize:30, color:'#ffffff'}}
    type="outline"
    raised= "true"
    //onPress=""
    />
  </SafeAreaView>
    </>
  )
  // return(
  //   Sawo
  // )
}
