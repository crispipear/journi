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


const Container = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Login: {screen: LoginScreen},
    SignUp: {screen: SignUpScreen},
    Prefs: {screen: PrefsScreen},
    About: {screen: AboutScreen},
    Trips: {
      screen: TripsScreen,
      navigationOptions: {
        gesturesEnabled: false,
      },
    },
    NewTrip: {
      screen: NewTripScreen,
      navigationOptions: {
        gesturesEnabled: false,
      }
    },
    Map: {
      screen: MapScreen,
      navigationOptions: {
        gesturesEnabled: false,
      },
    },
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

const swipeConfig = {
  velocityThreshold: 0.8,
  directionalOffsetThreshold: 80
};

const AppContainer = createAppContainer(Container)

const swipeRoutes = {
  Home: {
    left: 'Map',
    right: 'Trips'
  },
  Trips: {
    left: 'Home'
  },
  NewTrip:{

  },
  Map: {
    right: 'Home'
  }
}

export default class Router extends Component {

  state = {
    activeScreen: "Home" //default
  }

  getActiveRouteName= navigationState => {
    if (!navigationState) {
      return null;
    }
    const route = navigationState.routes[navigationState.index];
    if (route.routes) {
      return getActiveRouteName(route);
    }
    return route.routeName;
  }

  onSwipe = (gestureName, gestureState) => {
    const activeScreen = this.state.activeScreen;
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections
    let direction
    switch (gestureName) {
      case SWIPE_UP:
        direction = 'up'
        break;
      case SWIPE_DOWN:
        direction = 'down'
        break;
      case SWIPE_LEFT:
        direction = 'left'
        break;
      case SWIPE_RIGHT:
        direction = 'right'
      default:
        break;
    }
    
    if(swipeRoutes[activeScreen]){
      swipeRoutes[activeScreen][direction] &&
      this.navigateTo(swipeRoutes[activeScreen][direction])
    }
  }

  navigateTo = routeName => {
    this.navigator &&
      this.navigator.dispatch(
        NavigationActions.navigate({ routeName })
      )
  }

  render() {
    return (
      <GestureRecognizer
        onSwipe={(direction, state) => this.onSwipe(direction, state)}
        config={swipeConfig}
        style={{
          flex: 1,
        }}
        >
        <AppContainer
              ref={nav => {
                this.navigator = nav;
              }}
              
              onNavigationStateChange={(prevState, currentState, action) => {
                const currentScreen = this.getActiveRouteName(currentState);
                const prevScreen = this.getActiveRouteName(prevState);
          
                if (prevScreen !== currentScreen) {
                  this.setState({
                    activeScreen: currentScreen
                  })
                }
              }}
        />
       </GestureRecognizer>
    );
  }
}
