import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CloseIcon from '../assets/icons/close.png';
import { Calendar} from 'react-native-calendars';
import NewTripPhotos from './NewTripPhotos';
import { photoSearch } from '../utils/photoSearch';
import * as TripsManager from '../utils/tripsManager';

class NewTrip extends Component {
    state = {
        startDate: 'choose start date',
        endDate: 'choose end date',
        city: '',
        showCalendar: false,
        dateType: '',
        selectedDate: {},
        city: '',
        cityPhotos: [],
        photoIndex: 0
    }
    close = () => {
        this.props.navigation.navigate('Trips')
    }
    openCalendar = dateType =>{
        this.setState({
            showCalendar: true,
            dateType
        })
    }
    selectDate = day =>{
        let date = {[day.dateString]: {selected: true}}
        if(this.state.dateType == 'start'){
            this.setState({
                startDate: day.dateString
            })
        }else if(this.state.dateType == 'end'){
            this.setState({
                endDate: day.dateString
            })
        }
        this.setState({
            selectedDate: date
        })
    }
    searchCity = async () => {
       const result = await photoSearch(this.state.city)
       this.setState({
           cityPhotos: result
       })
    }
    storeIndex = photoIndex => this.setState({photoIndex})
    saveTrip = () => {
        let newTrip = {
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            city: this.state.city,
            photo: this.state.cityPhotos[this.state.photoIndex]
        } 
        TripsManager.addTrip(newTrip)
        this.close()
        this.setState({
            startDate: 'choose start date',
            endDate: 'choose end date',
            city: '',
            showCalendar: false,
            dateType: '',
            selectedDate: {},
            city: '',
            cityPhotos: [],
            photoIndex: 0
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.close}>
                    <Image style={styles.icon} source={CloseIcon}/>
                </TouchableOpacity>
                <Text style={styles.header}>CREATE A NEW TRIP</Text>
                <View style={[styles.block, {opacity: this.state.dateType == '' || this.state.dateType == 'start' ? 1 : 0.3}]}>
                   <Text style={[styles.text, {fontWeight: '600'}]}>Start Date</Text>
                   <TouchableOpacity onPress={() => this.openCalendar('start')}>
                       <Text style={styles.text}>{this.state.startDate}</Text>
                   </TouchableOpacity>
                </View>
                <View style={[styles.block, {opacity: this.state.dateType == '' || this.state.dateType == 'end' ? 1 : 0.3}]}>
                   <Text style={[styles.text, {fontWeight: '600'}]}>End Date</Text>
                   <TouchableOpacity onPress={() => this.openCalendar('end')}>
                       <Text style={styles.text}>{this.state.endDate}</Text>
                   </TouchableOpacity>
                </View>
                {
                    this.state.showCalendar &&
                <Calendar
                    style={{
                        borderWidth: 1,
                        borderColor: 'rgba(65, 75, 107, 0.35)',
                        padding: 10,
                        marginVertical: 15
                    }}
                    theme={{
                        calendarBackground: 'transparent',
                        selectedDayBackgroundColor: '#414b6b',
                        selectedDayTextColor: '#ffffff',
                        todayTextColor: '#d67b36',
                        arrowColor: '#414b6b',
                        monthTextColor: '#414b6b',
                        textDisabledColor: 'rgba(65, 75, 107, 0.4)',
                        textMonthFontWeight: 'bold',
                    }}
                    markedDates={this.state.selectedDate}
                    onDayPress={day => this.selectDate(day)}
                    />
                }
                {
                    !this.state.showCalendar &&
                    <View>
                        <View style={styles.block}>
                            <Text style={[styles.text, {fontWeight: '600'}]}>City</Text>
                            <TextInput
                                style={{width: '50%', textAlign: 'right', color: '#414b6b', fontSize: 16, margin: 0, padding: 0}}
                                placeholder={'enter city name'}
                                onChangeText={(city) => this.setState({city})}
                                onSubmitEditing={this.searchCity}
                                value={this.state.city}
                            />
                        </View>
                        <NewTripPhotos photos={this.state.cityPhotos} storeIndex={this.storeIndex}/>
                    </View>
                }
                {
                    this.state.showCalendar &&
                    <TouchableOpacity style={styles.button} onPress={() => this.setState({showCalendar: false, dateType: ''})}>
                        <Text style={styles.buttonText}>DONE</Text>
                    </TouchableOpacity>
                }
                {
                    !this.state.showCalendar &&
                    <TouchableOpacity 
                        style={[styles.button, {marginTop: 25, position: 'absolute', bottom: 30, left: 30}]}
                        onPress={this.saveTrip}
                    >
                        <Text style={styles.buttonText}>SAVE TRIP</Text>
                    </TouchableOpacity>
                }
        </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fbf7f1',
        paddingHorizontal: 30,
        paddingTop: 50,
    },
    header:{
        fontSize: 20,
        letterSpacing: 0.25,
        color: '#414b6b',
        fontWeight: '700',
        marginVertical: 25
    },
    block: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        marginBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor:'rgba(65, 75, 107, 0.4)'
    },
    icon: {
        width: 15,
        height: 15
    },
    text:{
        fontSize: 16,
        color: '#414b6b',
    },
    button: {
        width: '100%',
        backgroundColor: '#414b6e',
        paddingVertical: 10,
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        color: 'white',
        fontSize: 14,
        letterSpacing: 0.75
    }
})
function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch)
}
function mapStateToProps(state) {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(NewTrip);