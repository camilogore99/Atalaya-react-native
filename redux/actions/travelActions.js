export const types = {
	ADD_TRAVEL_ADDRESS: 'ADD_TRAVEL_ADDRESS',
	REMOVE_TRAVEL_ADDRESS: 'REMOVE_TRAVEL_ADDRESS'
}

export const addTravelAddress = (data) => ({
	type: types.ADD_TRAVEL_ADDRESS,
	payload: data
})

export const removeTravelAddress = () => ({
	type: types.REMOVE_TRAVEL_ADDRESS
})
