export const TravelModel = ({
	userId,
	currentLocation,
	offer,
	destination,
	comments
}) => {
	return {
		userId,
		currentLocation,
		offer,
		driverId: '',
		destination,
		comments,
		traking: [],
		status: {
			request: {
				driver: false,
				user: false
			},
			active: false
		}
	}
}
