import * as types from './actionTypes';

export function updateConsumedDrinks(drink) {
	return {type: types.ADD_DRINK_SUCCESS, drink};
}

export function consumeDrink(drink) {
	return function(dispatch) {
		console.log(drink);
		return dispatch(updateConsumedDrinks(drink));
	};
}