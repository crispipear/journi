import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, ImageBackground, TouchableOpacity, Alert} from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TripsManager from '../utils/tripsManager';
import CITY_INFO from '../data/cityInfo';

class TripInfo extends Component {
    state = {}
    back = () => {
        this.props.navigation.navigate('Trips')
    }
    delete = () => {
        Alert.alert(
            `Deleting Trip to ${this.props.trip.city}`,
            'Are you sure you want to delete this trip?',
            [
                {text: 'Confirm', onPress: () => {
                    TripsManager.deleteTrip(this.props.trip);
                    this.props.navigation.navigate('Trips');
                }},
                {text: 'Cancel'},
            ],
            {cancelable: false},
        );
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.header} source={{uri: this.props.trip.photo}}>
                    <View style={{flex: 1, width: '100%', zIndex: 1, padding: 30, flexDirection:'row', justifyContent: 'space-between'}}>
                        <TouchableOpacity onPress={this.back}>
                            <Text style={{color: 'rgba(255,255,255, 0.9)', letterSpacing: 1}}>BACK</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.delete}>
                            <Text style={{color: 'rgba(255,255,255, 0.9)', letterSpacing: 1}}>DELETE</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.headerInfo}>
                        <Text style={styles.cityText}>{this.props.trip.city}</Text>
                        <Text style={styles.dateText}>{this.props.trip.startDate} - {this.props.trip.endDate}</Text>
                    </View>
                    <View style={styles.overlay}/>
                </ImageBackground>
                <ScrollView contentContainerStyle={styles.content}>
                    <Text style={styles.headerText}>Things you should know traveling to {this.props.trip.city}</Text>
                    {
                        CITY_INFO.map((info, key) => 
                            <View style={styles.block}>
                                <Text style={styles.blockTitle}>{info.title}</Text>
                                <Text style={styles.blockContent}>{info.content}</Text>
                            </View>
                        )
                    }
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content:{
        paddingHorizontal: 30,
        paddingTop: 30,
        paddingBottom: 50
    },
    header: {
        width: '100%',
        height: 275,
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    headerText:{
        color: '#414b6e',
        fontSize: 20,
        textTransform: 'uppercase',
        lineHeight: 25,
        fontWeight: 'bold',
        marginBottom: 20
    },
    headerInfo:{
        flex: 4,
        zIndex: 1,
        justifyContent: 'flex-end'
    },
    block: {
        marginBottom: 20
    },
    blockTitle:{
        color: '#414b6e',
        fontSize: 15,
        marginBottom: 5,
        fontWeight: '600',
        textTransform: 'uppercase'
    },
    blockContent:{
        fontSize: 12,
        color: 'rgba(65, 75, 107, 0.6)',
        lineHeight: 18
    },
    cityText: {
        fontSize: 38,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 10,
        letterSpacing: 2.5,
        paddingLeft: 30,
        zIndex: 2,
    },
    dateText: {
        fontSize: 14,
        color: 'white',
        zIndex: 2,
        paddingHorizontal: 30,
        paddingBottom: 50
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
    return bindActionCreators({}, dispatch)
}
const mapStateToProps = state => ({
    trip: state.app.tripInfo
})
export default connect(mapStateToProps, mapDispatchToProps)(TripInfo);