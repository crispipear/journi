import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ICON_HOME from '../assets/icons/home.png';
import MapView from 'react-native-maps';

class Map extends Component {
    state = {
        lat: 0,
        long: 0
    }
    componentDidMount(){
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position)
            this.setState({long: position.longitude, lat: position.latitude});
        }, (error) => {
            console.log(JSON.stringify(error))
        }, {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 1000
        });
    }
     render() {
        return (
            <View style={styles.container}>
                <View style={styles.nav}>
                    <TouchableOpacity style={styles.iconContainer} onPress={() => this.props.navigation.navigate('Home')}>
                        <Image source={ICON_HOME} style={styles.image}/>
                    </TouchableOpacity>
                </View>
                <MapView
                    style={{flex: 1}}
                    initialRegion={{
                    latitude: 37.785834,
                    longitude: -122.406417,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                    }}
                />
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