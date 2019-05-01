import React, {Component} from 'react';
import {StyleSheet, Image, Text, View, Switch, TouchableOpacity} from 'react-native';
import Portrait from '../assets/portrait.jpg';
import {connect} from 'react-redux';
import SafetyCard from './SafetyCard';
import Settings from './Settings';
import CheckIn from './CheckIn';
import {setCountdown} from '../actions/userActions';
import {bindActionCreators} from 'redux';
import ICON_TRIP from '../assets/icons/trip.png';
import ICON_MAP from '../assets/icons/map.png';

class Home extends Component {
  state = {
    safetyCheckin: true,
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

  componentDidMount(){
    var d1 = new Date(),
    d2 = new Date ( d1 );
    d2.setMinutes ( d1.getMinutes() + 30 );
    this.props.setCountdown(d2)
  }
  nav = loc => {
    this.props.navigation.navigate(loc)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.nav}>
          <TouchableOpacity style={styles.iconContainer} onPress={() => this.nav('Trips')}>
            <Image source={ICON_TRIP} style={styles.image}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer} onPress={() => this.nav('Map')}>
            <Image source={ICON_MAP} style={styles.image}/>
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <View style={styles.checkIn}>
            <Text style={styles.text}>TIMED CHECK-IN: {this.state.safetyCheckin ? 'ON' : 'OFF'}</Text>
            <Switch 
                value={this.state.safetyCheckin} 
                onValueChange={this._safetyCheckin}
                thumbColor={'#606060'}
                trackColor={{true: '#c4c4c4', false: '#c4c4c4'}}
            />
          </View>
          <Image style={styles.portrait} source={Portrait}/> 
          <Text style={styles.name}>{this.props.username}</Text>
          <CheckIn card={this.state.card} setCard={this.setCard}/>
        </View>
        <View style={[styles.card, this.state.card == 'settings' && {flex: 2.25}, this.state.card == 'safetyCard' && {flex: 1.15}]}>
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
  text: {
    fontSize: 13,
    fontWeight: '500',
    color: '#414b6b'
  },
  header:{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fbf7f1',
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 30
  },
  portrait:{
    width: 80,
    height: 80,
    borderRadius: 40,
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
    color: '#414b6b',    
    width: '45%',
    fontSize: 21,
    letterSpacing: 0.5,
    fontWeight: '700'
  },
  nav: {
    position: 'absolute',
    bottom: 0,
    height: 60,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 10
  },
  image: {
    width: 30,
    height: 30,
    marginHorizontal: 30
  }
});


const mapStateToProps = state => ({
  username: state.user.username,
  checkInTime: state.user.checkInTime
})

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    setCountdown
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)