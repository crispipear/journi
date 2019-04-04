import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';

class SafetyCard extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 14, marginBottom: 15}}>SAFETY POCKET CARD</Text>
        <View style={styles.info}> 
          <Text style={styles.title}>YOU ARE STAYING AT</Text>
          <Text style={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
        </View>
        <View style={styles.info}> 
          <Text style={styles.title}>REAL-TIME LOCATION</Text>
          <Text style={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
        </View>
        <View style={styles.info}> 
          <Text style={styles.title}>NEAR-BY LANDMARKS</Text>
          <Text style={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
        </View>
        <View style={styles.info}> 
          <Text style={styles.title}>EMERGENCIES INFO</Text>
          <Text style={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 30
  },
  info: {
    marginBottom: 10
  },
  title: {
    fontSize: 11,
    letterSpacing: 0.5,
    fontWeight: '600',
    marginBottom: 2.5
  },
  content: {
    fontSize: 11,
    color: '#777777'
  }
});


const mapStateToProps = state => ({
  username: state.user.username 
})

export default connect(mapStateToProps, null)(SafetyCard)