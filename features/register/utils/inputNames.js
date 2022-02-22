import { REGISTER_STATE } from '../../../redux/reducers/registerReducer'

//get the names of the inputs from the reducer-state
const personalData_names = Object.keys(REGISTER_STATE.personalData).reduce(
	(initial, current) => {
		initial[current] = current
		return initial
	},
	{}
)

const vehicle_names = Object.keys(REGISTER_STATE.vehicle).reduce(
	(initial, current) => {
		initial[current] = current
		return initial
	},
	{}
)

export { vehicle_names, personalData_names }
