import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function dashboardReducer(state = initialState.consumedDrinks, action) {
	switch (action.type) {
		case types.ADD_DRINK_SUCCESS:
			return [...state, action.drink];

		default:
			return state;
	}
}

