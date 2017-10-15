import { combineReducers } from 'redux';
import AllReducer from './team_reducer';

export default combineReducers({
  all: AllReducer,
  cable: (state = {}) => {return state;},
});
