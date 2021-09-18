//import {NavigationContainer} from '@react-navigation/native';
import React, { Component } from 'react';
import { LogBox, Platform, SafeAreaView, View } from 'react-native';
import { Text } from 'react-native-elements';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import Sawo from 'react-native-sawo';
//import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
import Logo from '../assets/logo.png';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/core';
import {SAWO_KEY, SAWO_SECRET} from '@env';


//import {createStackNavigator} from '@react-navigation/stack';

export default LoginScreen = () => {
  //const Stack = createNativeStackNavigator();
  const LOGO = Image.resolveAssetSource(Logo).uri;
  const navigation = useNavigation();
  return (
    <>
    <View style={{
    justifyContent: 'center',
    alignItems: 'center',
  }}>

    <Image
      source={{ uri: LOGO }}
      style={{ width: 250, height: 250 , marginTop: 50}}
    />
    </View>
      <SafeAreaView style={{ flex: 0.5, paddingLeft: 50, paddingRight: 50, paddingTop: 4 }}>
        <Text style={{ textAlign: 'center', fontSize: 18 }}>Get an ambulance right at your doorstep, fast.</Text>
      </SafeAreaView>
      <SafeAreaView style={{ flex: 0.5, paddingLeft: 50, paddingRight: 50 }}>
        <Button
          onPress={() => {
            navigation.push("Login", {
              apiKey: SAWO_KEY,
              secretKey: SAWO_SECRET,
              identifierType: "phone_number_sms", // email | phone_number_sms,
              callback: (data) => {
                console.log(data);
                navigation.reset({
                  index: 0,
                  routes: [{ name: 'HomeScreen' }],
                });
              },
            });
          }}
          buttonStyle={{ backgroundColor: '#3DB2FF' }}
          title="Login with Phone"
          titleStyle={{ fontSize: 18, color: '#ffffff' }}
          type="outline"
          raised="true"
        //onPress=""
        />
      </SafeAreaView>
    </>
  )
  // return(
  //   Sawo
  // )
}
