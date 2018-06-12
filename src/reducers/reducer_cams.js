import { GET_CAMS } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_CAMS:
      return action.payload;
    default:
      return state;
  }
}
