export const STORE_CITIES_DATA  = 'STORE_CITIES_DATA',
             STORE_TRIPS_DATA   = 'STORE_TRIPS_DATA',
             UPDATE_TRIP_INFO   = 'UPDATE_TRIP_INFO'
             
export const storeCitiesData = data => ({
    type: STORE_CITIES_DATA,
    payload: data
})

export const storeTripsData = data => ({
    type: STORE_TRIPS_DATA,
    payload: data
})

export const updateTripInfo = trip => ({
    type: UPDATE_TRIP_INFO,
    payload: trip
})