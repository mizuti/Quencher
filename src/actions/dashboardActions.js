import * as types from './actionTypes';

export function updateConsumedDrinks(drink) {
	return {type: types.ADD_DRINK_SUCCESS, drink};
}

export function actionConsumeDrink(drink) {
	return function(dispatch) {
		return dispatch(updateConsumedDrinks(drink));
	};
}