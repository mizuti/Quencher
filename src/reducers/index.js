import {combineReducers} from 'redux';
import consumedDrinks from './dashboardReducer';

const rootReducer = combineReducers({
  // this is an example of ES6 'short hand property name'.
  // if object property name is same on both left and right side, you can short-hand it like so.
	consumedDrinks
});

export default rootReducer;
