import { types } from '../actions/modalActions'

const INITIAL_STATE = {
	message: 'Ocurrio un error',
	textButton: 'Aceptar',
	isVisible: false
}

const modalReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.MODAL_VISIBLE:
			return {
				...state,
				message: action.payload.message || state.message,
				textButton: action.payload.textButton || state.textButton,
				isVisible: action.payload.isVisible
			}
		default:
			return state
	}
}

export default modalReducer
