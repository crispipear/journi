import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput,
  TouchableOpacity, Image} from 'react-native';
import Portrait from '../assets/portrait.jpg';
import {storeUserInfo} from '../actions/userActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class SignUp extends Component {
  state = {
    username: '',
    password: '',
    email: ''
  }
  _prefs = () => {
    this.props.navigation.navigate('Prefs');
    this.props.storeUserInfo(this.state)
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Image style={styles.portrait} source={Portrait}/>
        </View>
        <View style={styles.bottom}>
          <View>
          <TextInput
            style={styles.input}
            placeholder="username"
            placeholderTextColor="#606060"
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
          />
          <TextInput
            style={styles.input}
            placeholder="password"
            placeholderTextColor="#606060"
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
          />
          <TextInput
            style={styles.input}
            placeholder="email"
            placeholderTextColor="#606060"
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
          />
          </View>
          <TouchableOpacity  style={styles.button} onPress={this._prefs}>
            <Text>NEXT</Text>
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
  portrait:{
    width: 125,
    height: 125,
    borderRadius: 62.5,
  },
  top: {
    flex: 1
  },
  bottom: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between'
  },
  input:{
    borderBottomColor: '#606060',
    borderBottomWidth: 1,
    marginTop: 15,
    width: '100%',
    height: 25,
  },
  button: {
    borderWidth: 1,
    marginTop: 50,
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#606060',
  }
});

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    storeUserInfo
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(SignUp)