export const STORE_USER_INFO        = 'STORE_USER_INFO',
             STORE_USER_PREFS       = 'STORE_USER_PREFS',
             UPDATE_CHECKIN_TIME    = 'UPDATE_CHECKIN_TIME',
             UPDATE_MESSAGE         = 'UPDATE_MESSAGE',
             SET_COUNT_DOWN         = 'SET_COUNT_DOWN'
             
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

export const setCountdown = countdown => ({
    type: SET_COUNT_DOWN,
    payload: countdown
})