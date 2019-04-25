export const STORE_CITIES_DATA  = 'STORE_CITIES_DATA',
             STORE_TRIPS_DATA   = 'STORE_TRIPS_DATA'
             
export const storeCitiesData = data => ({
    type: STORE_CITIES_DATA,
    payload: data
})

export const storeTripsData = data => ({
    type: STORE_TRIPS_DATA,
    payload: data
})