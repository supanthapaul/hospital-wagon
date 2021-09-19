# hospital-wagon
Android/iOS app that streamlines the process of calling for ambulances right at your doorstep. 
<p align="center">
  <img src="https://user-images.githubusercontent.com/33364898/133915803-c3cc221f-f032-4254-86d6-58620c119756.gif" alt="animated" />
</p>

## Setup
To setup and run this project locally, 
1. Install Expo globally using npm, 
```
npm install --global expo-cli
```
2. Create a .env file with the following keys,
    * Google API key with Places API, Directions API, and Distance Matrix API enabled
    * Sawo Labs API key
    * Sawo labs API secret 

```
GOOGLE_API_KEY=<YOUR_KEY>
SAWO_KEY=<YOUR_KEY>
SAWO_SECRET=<YOUR_KEY>
```
3. Lastly, install the dependencies and run the app 
```
npm i
npm start
```
You can learn more about installing and running an api with Expo [here.](https://docs.expo.dev/get-started/installation/)


## Inspiration
Calling for an ambulance in an emergency situation has always been a tedious process. It used to be like this,
 - Find the phone number of the hospital of your choice. (Google/ Asking someone)
 - Call the number (Which can often have a high volume of people trying to reach it)
 - Tell them your current location and other details.
 - Your ambulance will be on your way.
 - If the hospital you called currently doesn’t have vacant ambulances, you’ll have to try and reach a different helpline.

We know time is very important in a critical health situation, every second counts.
So we decided to simplify the process in order to have faster ambulance bookings and lesser casualties from ambulance delays.

## What it does
It gets a location from the user(where the ambulance is required) and lets the user search for the hospital and after confirming the booking, an ambulance of the user's choice is dispatched from the hospital. It allows users to select a hospital of choice for the ambulance. It also allows users to select the type of ambulance that would be sent to the user.

## How we built it
We used several technologies for our app:
 - Expo/react-native
 - Redux
 - Tailwind
 - SAWOLabs API

Our project also makes use of 3 Google APIs extensively for a seamless user experience,
 - Google Places API
 - Google Directions API
 - Google Distance Matrix API


## Challenges we ran into
- We ran into several speedbumps while integrating the react-native framework for the first time
- We faced some challenges while integrating Google APIs for distance and route.

## Accomplishments that we're proud of
- We made a pretty simple to use UI
- We successfully implemented Expo(react-native) for the first time and that too in such a pressure situation
- We successfully implemented the Google APIs for the first time 

## What we learned
- We learned a lot about the Expo (react-native) framework and its implementation for android and iOS apps
- We learned about how the Google maps integrate with the APIs to provide, routes, time, distance and autocomplete features
- We also learned about hybrid development of applications through React-native framework

## What's next for Hospital Wagon
- Ability for hospitals to register on our app to provide real-time booking and availability data of ambulances through our app.

### Links
[Github Repo](https://github.com/supanthapaul/hospital-wagon)
[Demo Video](https://youtu.be/4KldCOTAm_E)
