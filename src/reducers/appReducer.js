import {STORE_CITIES_DATA, STORE_TRIPS_DATA} from '../actions/appActions';

const initState = {
    citiesInfo: [],
    trips: []
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
                trips: JSON.parse(action.payload)
            }
        default:
            return state
    }
}