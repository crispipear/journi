const initState = {
    username: 'test',
    password: '123141S',
    prefs: {}
}

export default function(state=initState, action){
    switch(action.type){
        // case UPDATE_DISTRICTS:
        //     return{
        //         ...state,
        //         districts: action.payload
        //     }
        default:
            return state
    }
}