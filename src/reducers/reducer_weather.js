import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_WEATHER:
    // return state.concat([action.payload.data]);
    return [ action.payload.data, ...state];
    //from api action return, ... says to take all entires in the array and insert into the new outside array. like concat.

  }
  return state;

}
