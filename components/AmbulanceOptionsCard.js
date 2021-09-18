import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList, Image, Alert } from 'react-native'
import { Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import { selectTravelTimeInformation } from '../slices/navSlice';

const data = [
  {
    id: "2323",
    title: "Basic",
    available: 7,
    multiplier: 1,
    image: "https://cdn.iconscout.com/icon/free/png-256/ambulance-2080900-1757005.png"
  },
  {
    id: "232dfdf3",
    title: "Emergency",
    available: 2,
    multiplier: 1.7,
    image: "https://cdn.iconscout.com/icon/free/png-256/ambulance-2080900-1757005.png"
  },
  {
    id: "232dfdfdfdf3",
    title: "Neonatal",
    available: 4,
    multiplier: 1.3,
    image: "https://cdn.iconscout.com/icon/free/png-256/ambulance-2080900-1757005.png"
  },
  {
    id: "2sdsd3fdd23",
    title: "Mortuary",
    available: 3,
    multiplier: 1,
    image: "https://cdn.iconscout.com/icon/free/png-256/ambulance-2080900-1757005.png"
  }
]
const AmbulanceOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  const onAmbulanceCall = (ambulance) => Alert.alert(
    "Ambulance Booked",
    `Your ${ambulance.title} ambulance will arrive in ${travelTimeInformation?.duration?.text}`,
    [
      { text: "OK", onPress: () => navigation.navigate("HomeScreen") }
    ]
  );

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <View>
        <TouchableOpacity 
          onPress={() =>navigation.navigate("NavigateCard")}
          style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
        >
          <Icon name="chevron-left" type="fontawesome"/>
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>Ambulance options - {travelTimeInformation?.distance?.text}</Text>
      </View>
      <FlatList 
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity 
            onPress={() => setSelected(item)}
            style={tw`flex-row justify-between items-center px-5 ${item.id == selected?.id && 'bg-gray-200'}`}>
            <Image
              style={{
                width: 80,
                height: 80,
                resizeMode: 'contain',
                paddingBottom: 20
              }}
              source={{
                uri: item.image
              }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{item.title}</Text>
              <Text style={tw`text-center`}>Arrives in: {travelTimeInformation?.duration?.text}</Text>
            </View>
            <Text style={tw`text-lg text-green-500 font-bold text-center`}>{item.available} {'\n'}Available</Text>
          </TouchableOpacity>
        )}
      />
      <View>
        <TouchableOpacity 
          disabled={!selected} 
          onPress={() => onAmbulanceCall(selected)}
          style={[tw`bg-red-600 py-3 m-3 ${!selected && "bg-gray-400"}`, {borderRadius:8}]}>
          <Text style={tw`text-center text-white text-xl`}>Call {selected?.title}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default AmbulanceOptionsCard

const styles = StyleSheet.create({})
