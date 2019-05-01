import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';

class SafetyCard extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 18, marginBottom: 15, fontWeight: '600', marginBottom: 20, color: '#414b6b'}}>SAFETY POCKET CARD</Text>
        <View style={styles.info}> 
          <Text style={styles.title}>YOU ARE STAYING AT</Text>
          <Text style={styles.content}>213 rue Saint Honroe, 7500 Paris, France</Text>
        </View>
        <View style={styles.info}> 
          <Text style={styles.title}>REAL-TIME LOCATION</Text>
          <Text style={styles.content}>308 rue Saint Honroe, 7500 Paris, France</Text>
        </View>
        <View style={styles.info}> 
          <Text style={styles.title}>NEAR-BY LANDMARKS</Text>
          <Text style={styles.content}>Le Relais Hotel</Text>
        </View>
        <View style={styles.info}> 
          <Text style={styles.title}>EMERGENCIES INFO</Text>
          <Text style={styles.content}>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
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
    marginBottom: 15
  },
  title: {
    fontSize: 13,
    letterSpacing: 0.5,
    fontWeight: '600',
    marginBottom: 2.5,
    color: '#414b6b', 
  },
  content: {
    fontSize: 12,
    color: '#414b6b',
    opacity: 0.75
  }
});


const mapStateToProps = state => ({
  username: state.user.username 
})

export default connect(mapStateToProps, null)(SafetyCard)