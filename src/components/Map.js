import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ICON_HOME from '../assets/icons/home.png';

class Map extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <Text>Map</Text>
                <View style={styles.nav}>
                    <TouchableOpacity style={styles.iconContainer} onPress={() => this.props.navigation.navigate('Home')}>
                        <Image source={ICON_HOME} style={styles.image}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch)
}
function mapStateToProps(state) {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Map);