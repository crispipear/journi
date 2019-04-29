import {STORE_CITIES_DATA, STORE_TRIPS_DATA, UPDATE_TRIP_INFO} from '../actions/appActions';

const initState = {
    citiesInfo: [],
    trips: [],
    tripInfo: {}
}

export default function(state=initState, action){
    switch(action.type){
        case STORE_CITIES_DATA:
            return{
                ...state,
                citiesInfo: action.payload
            }
        case STORE_TRIPS_DATA:
            return{
                ...state,
                trips: action.payload
            }
        case UPDATE_TRIP_INFO:
            return{
                ...state,
                tripInfo: action.payload
            }
        default:
            return state
    }
}