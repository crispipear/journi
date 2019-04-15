import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import Router from './components/Router';
import {fetchData} from './utils/fetchCitiesData';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

console.disableYellowBox = true;
const swipeConfig = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80
};

class App extends Component {
  componentDidMount(){
    fetchData()
  }
  onSwipe = (gestureName, gestureState) => {
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    switch (gestureName) {
      case SWIPE_UP:
        console.log('up')
        break;
      case SWIPE_DOWN:
        console.log('down')
        break;
      case SWIPE_LEFT:
        console.log('left')
        break;
      case SWIPE_RIGHT:
        console.log('right')
        break;
    }
  }

  render() {
    return (
      <Provider store={store}>
      <GestureRecognizer
        onSwipe={(direction, state) => this.onSwipe(direction, state)}
        config={swipeConfig}
        style={{
          flex: 1,
        }}
        >
        <Router/>
      </GestureRecognizer>
      </Provider>
    );
  }
}

export default App;
