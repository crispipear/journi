import React, {Component} from 'react';
import {StyleSheet, Image, Text, View, Switch, TouchableOpacity} from 'react-native';
import Portrait from '../assets/portrait.jpg';
import {connect} from 'react-redux';
import SafetyCard from './SafetyCard';
import Settings from './Settings';

class Home extends Component {
  state = {
    safetyCheckin: false,
    card: 'safetyCard'
  }
  _safetyCheckin = value => {
    this.setState({
      safetyCheckin: value
    })
  }

  setCard = value => {
    this.setState({
      card: value
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.checkIn}>
            <Text style={styles.text}>SAFETY CHECK-IN: {this.state.safetyCheckin ? 'ON' : 'OFF'}</Text>
            <Switch 
                value={this.state.safetyCheckin} 
                onValueChange={this._safetyCheckin}
                thumbColor={'#606060'}
                trackColor={{true: '#c4c4c4', false: '#c4c4c4'}}
            />
          </View>
          <Image style={styles.portrait} source={Portrait}/> 
          <Text style={styles.name}>{this.props.username}</Text>
          {
            this.state.card != 'settings' &&
            <TouchableOpacity style={styles.button} onPress={() => this.setCard('settings')}>
              <Text style={{fontSize: 12}}>CHECK-IN SETTINGS</Text>
            </TouchableOpacity>
          }
        </View>
        <View style={[styles.card, this.state.card == 'settings' && {flex: 1.75}, this.state.card == 'safetyCard' && {flex: 1.15}]}>
          {
            this.state.card == 'settings' ?
            <Settings setCard={this.setCard}/>
            : this.state.card == 'safetyCard'?
            <SafetyCard/>
            :
            <View/>
          }
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
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 30
  },
  portrait:{
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20
  },
  checkIn:{
    width: '100%',
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  name: {
    textAlign: 'center',
    width: '45%',
    fontSize: 22,
    letterSpacing: 1.25,
    fontWeight: '700'
  },
  button: {
    borderWidth: 1,
    marginTop: 15,
    width: '65%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#606060',
  }
});


const mapStateToProps = state => ({
  username: state.user.username 
})

export default connect(mapStateToProps, null)(Home)