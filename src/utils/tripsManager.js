import store from '../store'
import {storeTripsData} from '../actions/appActions';
import * as AS from './asyncStorage';

export const getTrips = async () => {
  const trips = await AS.get('trips')
  store.dispatch(storeTripsData(trips))
}

export const addTrip = trip => {
  let curTrips = store.getState().app.trips.slice()
  curTrips.push(trip)
  console.log(curTrips)
  AS.set('trips', JSON.stringify(curTrips))
  getTrips()
}