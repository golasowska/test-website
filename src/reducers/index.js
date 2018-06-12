import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import CamsReducer from './reducer_cams';

const rootReducer = combineReducers({
  form: formReducer,
  cams: CamsReducer
});

export default rootReducer;
