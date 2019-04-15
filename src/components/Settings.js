import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight, ScrollView} from 'react-native';
import Slider from "react-native-slider";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateCheckinTime} from '../actions/userActions';
import Contacts from './settings/Contacts';
import Message from './settings/Message';

class Settings extends Component {
    state = {
        curVal: 0,
        time: '0 minutes'
    }
    componentDidMount(){
        this.setState({
            curVal: this.props.time,
            time: this.calcTime(this.props.time)
        })
    }
    handleChange = value => {
        this.setState({
            curVal: value,
            time: this.calcTime(value)
        })
    }
    calcTime = min => {
        let result = ''
        if (min < 60){
            result = min + ' MINUTES'
        }else if (min >= 60){
            if (min < 120){
                result = Math.floor(min/60) + ' HOUR'
            }else{
                result = Math.floor(min/60) + ' HOURS'
            }
            
            if (min%60 !== 0){
                result += ' ' + min%60 + ' MINUTES'
            }
        }
        return result
    }
    _confirm = () => {
        this.props.updateCheckinTime(this.state.curVal)
        this.props.setCard('safetyCard')
    }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.settings}>
            <Text style={styles.text}>CHECK-IN TIME: EVERY {this.state.time}</Text>
            <Slider
            step={15}
            minimumValue={15}
            maximumValue={180}
            thumbTintColor={'#4f4f4f'}
            thumbStyle={{width: 12, height: 12}}
            minimumTrackTintColor={'#7a7a7a'}
            maximumTrackTintColor={'#c4c4c4'}
            trackStyle={{height: 3}}
            onValueChange={this.handleChange}
            value={this.state.curVal}
            />
            <View style={styles.emerg}>
                <Text style={styles.title}>EMERGENCY CONTACTS</Text>
                <Contacts/>
                <Message/>
            </View>
            <View style={styles.emerg}>
                <Text style={styles.title}>PRIVATE POLICY</Text>
                 <Text style={styles.text}>By using this app you are giving permissions journi to 
                access your location for safety purposes.</Text>            
            </View>
        </ScrollView>
        <TouchableHighlight underlayColor="#a3a3a3" style={styles.confirm} onPress={this._confirm}>
            <Text style={{color: '#333333', fontWeight: '600', letterSpacing: 0.25}}>CONFIRM</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbf7f1'
  },
  settings: {
    paddingHorizontal: 30,
    paddingTop: 30,
    paddingBottom: 100
  },
  confirm: {
      bottom: 0,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      width: '100%',
      backgroundColor: '#d8d8d8'
  },
  text:{
      fontSize: 13
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    letterSpacing:0.5,
    marginBottom: 10
  },
  emerg:{
      marginVertical: 15
  }
});


const mapStateToProps = state => ({
    time: state.user.checkInTime    
})

function mapDispatchToProps(dispatch){
    return bindActionCreators({
      updateCheckinTime
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)