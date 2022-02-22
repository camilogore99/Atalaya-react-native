import { types } from '../actions/authActions'

const INITIAL_STATE = {
	seccion: false
}

const cursosReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.LOGOUT_SECCION:
		case types.LOGIN_SECCION:
			return {
				...state,
				seccion: action.payload
			}

		default:
			return state
	}
}

export default cursosReducer
