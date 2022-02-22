import { types } from '../actions/travelActions'

const INITIAL_STATE = {
	initial: {
		lat: 10.3932277,
		long: -75.4832311,
		address: ''
	},
	destination: {
		lat: 6.2476376,
		long: -75.56581530000001,
		address: ''
	}
}

const travelReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.ADD_TRAVEL_ADDRESS:
			return {
				...state,
				...action.payload
			}
		case types.REMOVE_TRAVEL_ADDRESS:
			return INITIAL_STATE

		default:
			return state
	}
}

export default travelReducer
