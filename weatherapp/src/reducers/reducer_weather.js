import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	// console.log('Action received: ', action)
	switch (action.type) {
		case FETCH_WEATHER:
			let weatherData = action.payload.data;
			
			return [ weatherData, ...state ];
		default:
			return state
	}	
}