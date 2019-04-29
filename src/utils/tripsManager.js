import store from '../store'
import {storeTripsData} from '../actions/appActions';
import * as AS from './asyncStorage';

export const getTrips = async () => {
  const trips = await AS.get('trips')
  store.dispatch(storeTripsData(JSON.parse(trips)))
}

export const addTrip = trip => {
  let curTrips = store.getState().app.trips.slice()
  curTrips.push(trip)
  AS.set('trips', JSON.stringify(curTrips))
  getTrips()
}

export const deleteTrip = deltrip => {
  let curTrips = store.getState().app.trips.slice()
  curTrips = curTrips.filter(trip => trip !== deltrip)
  AS.set('trips', JSON.stringify(curTrips))
  getTrips()
}

export const clearTrips = () => {
  AS.set('trips', '[]')
}