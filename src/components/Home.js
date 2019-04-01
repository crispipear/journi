import React, {Component} from 'react';
import {StyleSheet, Image, Text, View, Switch} from 'react-native';
import Portrait from '../assets/portrait.jpg';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.portrait} source={Portrait}/>
        </View>
        <View style={styles.card}>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f2f2f2',
    alignItems: 'center'
  },
  card:{
    flex: 1.15
  },
  portrait:{
    width: 125,
    height: 125,
    borderRadius: 62.5,
  },
});
