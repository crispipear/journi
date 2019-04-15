import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class CheckIn extends Component {
  state = {
    time: "00 : 00 : 00"
  }
  componentDidMount(){
    setInterval(()=>{
      this._getTimeDiff()
    }, 1000)
  }
  _getTimeDiff = () => {
    var dt2 = this.props.countDown
    var dt1 = new Date()
    var diff = dt2 - dt1
    seconds = parseInt((diff / 1000) % 60)
    minutes = parseInt((diff / (1000 * 60)) % 60)
    hours = parseInt((diff / (1000 * 60 * 60)) % 24)
    this.setState({
      time: `${hours<10 ? '0'+hours: hours} : ${minutes<10 ? '0'+minutes: minutes} : ${seconds<10 ? '0'+seconds : seconds}`
    })
  }
  
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.setCard("settings")} style={styles.container}>
          <Text style={{fontSize: 12}}>NEXT CHECK-IN</Text>
          <Text style={styles.time}>{this.state.time}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  button: {
    borderWidth: 1,
    marginTop: 15,
    width: '65%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fbf7f1',
  },
  time: {
    fontSize: 23,
    letterSpacing: 1,
    fontWeight: '600',
    marginTop: 5
  }
});

const mapStateToProps = state => ({
  countDown: state.user.countDown
})

function mapDispatchToProps(dispatch){
  return bindActionCreators({
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckIn)
