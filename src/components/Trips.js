import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, ScrollView} from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TripsManager from '../utils/tripsManager';
import {updateTripInfo} from '../actions/appActions';

class Trips extends Component {
    componentDidMount(){
        TripsManager.getTrips()
        // TripsManager.clearTrips()
    }
    newTrip = () => {
        this.props.navigation.navigate('NewTrip')
    }
    tripInfo = trip => {
        this.props.navigation.navigate('TripInfo')
        this.props.updateTripInfo(trip)
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require("../assets/tripsHeader.png")} 
                                 style={[styles.block, this.props.trips.length == 0 && {height: '100%'}]}
                >
                    <Text style={styles.text}>Whereto, {this.props.username.split(" ").shift()}?</Text>    
                    <TouchableOpacity style={styles.button} onPress={this.newTrip}>
                        <Text style={styles.buttonText}>CREATE A TRIP</Text>    
                    </TouchableOpacity>            
                </ImageBackground>
                {
                    this.props.trips.length > 0 &&
                    <ScrollView>
                     {
                        this.props.trips.map((trip, key)=>
                        <TouchableOpacity key={key} onPress={() => this.tripInfo(trip)}>
                            <ImageBackground source={{uri: trip.photo}} style={styles.block}>
                                <Text style={styles.cityText}>{trip.city}</Text>
                                <Text style={styles.dateText}>{trip.startDate} - {trip.endDate}</Text>
                                <View style={styles.overlay}/>
                            </ImageBackground>
                        </TouchableOpacity>
                        )
                     }
                    </ScrollView>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    block: {
        width: '100%',
        height: 225,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        textTransform: 'uppercase',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 0.75
    },
    cityText: {
        fontSize: 38,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 10,
        letterSpacing: 2.5,
        zIndex: 2,
    },
    dateText: {
        fontSize: 14,
        color: 'white',
        zIndex: 2
    },
    button: {
        backgroundColor: '#414b6e',
        paddingVertical: 10,
        paddingHorizontal: 40,
        marginTop: 15
    },
    buttonText:{
        color: 'white',
        fontSize: 14,
        letterSpacing: 0.75
    },
    overlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(65, 75, 107, 0.4)',
        zIndex: 0
    }
})

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateTripInfo
    }, dispatch)
}
function mapStateToProps(state) {
    return {
        username: state.user.username,
        trips: state.app.trips
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Trips);