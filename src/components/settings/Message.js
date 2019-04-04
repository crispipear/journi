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
    backgroundColor: '#f2f2f2',
    marginBottom: 25
  },
  input: {
      width: '100%',
      paddingTop: 20,
      minHeight: 100,
      padding: 25,
      alignItems:'flex-start',
      justifyContent: 'flex-start',
      backgroundColor: '#ededed',
      shadowColor: "#000", 
      shadowOffset: { width: 0, height: 2, }, 
      shadowOpacity: 0.25, 
      shadowRadius: 5, 
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