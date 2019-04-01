import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class Login extends Component {
  _signUp = () => {
    this.props.navigation.navigate('SignUp')
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.logoContainer}>
            <Text>LOGO</Text>
          </View>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity  style={styles.button} onPress={this._signUp}>
            <Text>SIGN UP</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} >
            <Text>AIRBNB</Text>
          </TouchableOpacity>
        </View>
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
  logoContainer:{
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#606060'
  },
  top: {
    flex: 1
  },
  bottom: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end'
  },
  button: {
    borderWidth: 1,
    marginTop: 15,
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#606060',
  }
});
