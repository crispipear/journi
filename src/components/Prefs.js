import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import PrefsItem from './PrefsItem';

const preferences = ['prefs1', 'prefs2', 'prefs3', 'prefs4', 'prefs5']

export default class Prefs extends Component {
  state = {
    'prefs1': false,
    'prefs2': false,
    'prefs3': false,
    'prefs4': false,
    'prefs5': false
  }
  changeValue = (value, name) =>{
    this.setState({
      [name]: value
    })
  }
  _home = () => {
    this.props.navigation.navigate('Home')
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          {
            preferences.map((p, key) => 
              <PrefsItem key={key} name={p} value={this.state[p]} changeValue={this.changeValue}/>
            )
          }
        </View>
        <View style={styles.bottom}>

        </View>
        <TouchableOpacity style={styles.button} onPress={this._home}>
          <Text>DONE</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 75,
    paddingHorizontal: 50
  },
  top: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    flex: 1,
    justifyContent: 'space-between'
  },
  button: {
    borderWidth: 1,
    marginTop: 50,
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#606060',
  }
});
