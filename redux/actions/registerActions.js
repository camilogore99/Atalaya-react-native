export const types = {
	ADD_PERSONAL_DATA: 'ADD_PERSONAL_DATA',
	CHANGE_STATUS_PERSONAL_DATA: 'CHANGE_STATUS_PERSONAL_DATA',
	HANDLER_STATUS_VALUE_OF_SPECIFIC_VEHICLE_INPUT:
		'HANDLER_STATUS_VALUE_OF_SPECIFIC_VEHICLE_INPUT'
}

export const handlerPersonalData = (data) => ({
	type: types.ADD_PERSONAL_DATA,
	payload: data
})

export const handlerStatusPersonalData = (data) => ({
	type: types.CHANGE_STATUS_PERSONAL_DATA,
	payload: data
})
