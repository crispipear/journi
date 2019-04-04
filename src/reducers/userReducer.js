import {STORE_USER_INFO, STORE_USER_PREFS, UPDATE_CHECKIN_TIME, UPDATE_MESSAGE} from '../actions/userActions';

const initState = {
    username: 'Angela Birchman',
    password: '',
    email: '',
    prefs: {},
    checkInTime: 45,
    message: "Hey, I have not checked in with my journi app, if I don't reply to your phone call please help me contact the local emergency."
}

export default function(state=initState, action){
    switch(action.type){
        case STORE_USER_INFO:
            return{
                ...state,
                username: action.payload.username,
                password: action.payload.password,
                email: action.payload.email
            }
        case STORE_USER_PREFS:
            return{
                ...state,
                prefs: action.payload
            }
        case UPDATE_CHECKIN_TIME:
            return{
                ...state,
                checkInTime: action.payload
            }
        case UPDATE_MESSAGE:
            return{
                ...state,
                message: action.payload
            }
        default:
            return state
    }
}