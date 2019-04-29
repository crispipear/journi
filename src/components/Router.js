import React, { Component } from 'react';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import {Animated, Easing} from 'react-native';
import {createStackNavigator, createAppContainer, NavigationActions} from 'react-navigation';

import HomeScreen from './Home';
import AboutScreen from './About';
import LoginScreen from './Login';
import SignUpScreen from './SignUp';
import PrefsScreen from './Prefs';
import TripsScreen from './Trips';
import NewTripScreen from './NewTrip';
import MapScreen from './Map';
import TripInfoScreen from './TripInfo';

const Container = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Login: {screen: LoginScreen},
    SignUp: {screen: SignUpScreen},
    Prefs: {screen: PrefsScreen},
    About: {screen: AboutScreen},
    Trips: {screen: TripsScreen},
    NewTrip: {screen: NewTripScreen},
    TripInfo: {screen: TripInfoScreen},
    Map: {screen: MapScreen,}
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    transitionConfig : () => ({
      transitionSpec: {
        duration: 0,
        timing: Animated.timing,
        easing: Easing.step0,
      },
    })
  }
)

const AppContainer = createAppContainer(Container)

export default AppContainer
