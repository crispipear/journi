import React, {Component} from 'react';
import {StyleSheet, Text, View, Switch} from 'react-native';

export default class Prefs extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.name}</Text>
        <Switch value={this.props.value} onValueChange={(value) => this.props.changeValue(value, this.props.name)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  text: {
    flex: 1
  }
});