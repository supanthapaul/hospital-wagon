import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View,Switch, KeyboardAvoidingView, Platform } from 'react-native';
import {Provider} from 'react-redux';
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen';
import LoginScreen from './screens/LoginScreen';
import Sawo from "react-native-sawo";


export default function App() {

  
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? "padding" : "height"}
          style={{flex: 1}}
        >
          <Stack.Navigator>
            <Stack.Screen 
              name="LoginScreen" 
              component={LoginScreen} 
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen 
              name="HomeScreen" 
              component={HomeScreen} 
              options={{
                title: "Hospital Wagon",
                headerBackVisible: false
              }}
            />
            <Stack.Screen 
              name="MapScreen" 
              component={MapScreen} 
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen name="Login" component={Sawo} options={{
                headerShown: false
              }}/>
          </Stack.Navigator>
        </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  
});
