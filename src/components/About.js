import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class About extends Component {
  render() {
    const {navigate} = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>About page</Text>
        <Button title="go back home" onPress={() => navigate('Home')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
