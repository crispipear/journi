import {STORE_CITIES_DATA} from '../actions/appActions';

const initState = {
    citiesInfo: []
}

export default function(state=initState, action){
    switch(action.type){
        case STORE_CITIES_DATA:
            console.log(action.payload)
            return{
                ...state,
                citiesInfo: action.payload
            }
        default:
            return state
    }
}