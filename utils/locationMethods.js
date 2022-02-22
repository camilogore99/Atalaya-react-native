import * as Location from 'expo-location'
import * as TaskManager from 'expo-task-manager'

export const locationToAddress = async (latitude, longitude) => {
	try {
		const res = await fetch(
			`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${'AIzaSyAXxgheBUHJIG8JyVu-hO2hKBXnVztwoFo'}`
		)
		const data = await res.json()

		return data.results[0]?.formatted_address || 'Ocurrio un problema interno'
	} catch (err) {
		console.error(err)
		return ''
	}
}

export const addressToLocation = async (address) => {
	const addressConverted = 'convert adddress to base 64'

	try {
		const res = await fetch(
			`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${'AIzaSyAXxgheBUHJIG8JyVu-hO2hKBXnVztwoFo'}`
		)
		const data = await res.json()

		return data.results[0].formatted_address
	} catch (err) {
		console.error(err)
		return ''
	}
}

export const locationPermissions = async (handleModal, setLocation) => {
	let { status } = await Location.requestForegroundPermissionsAsync()
	await Location.requestBackgroundPermissionsAsync()

	if (status != 'granted') {
		handleModal(true, 'La aplicación requiere permisos de ubicación')

		return
	}

	try {
		const suscribe = await Location.watchPositionAsync(
			{ accuracy: Location.Accuracy.High, distanceInterval: 5 },
			(data) => {
				setLocation(data.coords)
			}
		)
		return suscribe
	} catch (err) {
		handleModal(true, 'Debes activar la ubicación')
	}
}

export const backgroundLocationPermissions = async (setLocation) => {
	const TASK_NAME = 'background-location'

	try {
		await Location.startLocationUpdatesAsync(TASK_NAME, {
			accuracy: Location.Accuracy.High,
			distanceInterval: 5,
			timeInterval: 1000,
			foregroundService: {
				notificationTitle: 'Atalaya esta ejecutandose',
				notificationBody: 'Se está haciendo uso de la ubicación (Ver más)'
			}
		})

		TaskManager.defineTask(TASK_NAME, ({ data: { locations }, error }) => {
			if (error) {
				return
			}
			const lastLocation = locations[locations.length - 1]
			setLocation(lastLocation.coords)
		})
	} catch (err) {
		console.error(err)
	}
}
