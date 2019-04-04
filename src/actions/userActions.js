export const STORE_USER_INFO        = 'STORE_USER_INFO',
             STORE_USER_PREFS       = 'STORE_USER_PREFS',
             UPDATE_CHECKIN_TIME    = 'UPDATE_CHECKIN_TIME',
             UPDATE_MESSAGE         = 'UPDATE_MESSAGE'
             
export const storeUserInfo = info => ({
    type: STORE_USER_INFO,
    payload: info
})

export const storeUserPrefs = prefs => ({
    type: STORE_USER_PREFS,
    payload: prefs
})

export const updateCheckinTime = time => ({
    type: UPDATE_CHECKIN_TIME,
    payload: time
})

export const updateMessage = msg => ({
    type: UPDATE_MESSAGE,
    payload: msg
})