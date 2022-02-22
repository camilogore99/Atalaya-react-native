import authReducer from './authReducer'
import { combineReducers } from 'redux'
import modalReducer from './modalReducers'
import travelReducer from './travelReducer'
import { registerReducer } from './registerReducer'

export default combineReducers({
	auth: authReducer,
	modal: modalReducer,
	travel: travelReducer,
	register: registerReducer
})
