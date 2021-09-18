import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';


export default class MapScreen extends Component {
  render() {
    return (
      <SafeAreaView style={tw`bg-white h-full`}>
        <Text>Map screen</Text>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({})
