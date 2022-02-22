import { db, auth } from '../../connection'
import { TravelModel } from '../../models/TravelModel'

export const createTravel = (data, handleModal) => {
	if (validateData(data, handleModal)) {
		console.log(data)
	}
}

const validateData = (data, handleModal) => {
	let token = true

	const regex = {
		currentLocation: {
			message: 'Ubicación incorrecta'
		},
		destination: {
			message: 'Destino incorrecta'
		},
		offer: {
			regex: /^\d{3,10}$/,
			message: 'El número no es valido'
		},
		comments: {
			regex: /^/,
			message: ''
		}
	}

	Object.entries(data).every(([key, value]) => {
		if (key === 'currentLocation' || key === 'destination') {
			if (!value || value.length < 5) {
				handleModal(true, regex[key].message)
				token = false
				return false
			} else return true
		} else if (!regex[key].regex.test(value)) {
			handleModal(true, regex[key].message)
			token = false
			return false
		} else return true
	})

	return token
}
