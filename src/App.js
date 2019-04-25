import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import Router from './components/Router';
import {fetchData} from './utils/fetchCitiesData';

console.disableYellowBox = true;

class App extends Component {
  componentDidMount(){
    fetchData()
  }
  render() {
    return (
      <Provider store={store}>
        <Router/>
      </Provider>
    );
  }
}

export default App;
