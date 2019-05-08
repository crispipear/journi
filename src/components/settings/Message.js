import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateMessage} from '../../actions/userActions';

class Message extends Component {
    state = {
        message: ''
    }
    componentDidMount(){
        this.setState({
            message: this.props.message
        })
    }
  render() {
    return (
      <View style={styles.container}>
           <TextInput
                style={styles.input}
                placeholder="Write your emergency message content, we will send this out to your emergency contacts if you failed to check-in."
                placeholderTextColor="#606060"
                onChangeText={(message) => this.setState({message})}
                value={this.state.message}
                multiline={true}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
      width: '100%',
      paddingTop: 15,
      minHeight: 100,
      padding: 15,
      alignItems:'flex-start',
      justifyContent: 'flex-start',
      borderColor: '#414b6b',
      borderWidth: 1,
      fontSize: 13
  }
});


const mapStateToProps = state => ({
    message: state.user.message
})

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        updateMessage
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Message)