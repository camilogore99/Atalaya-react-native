import { db } from '../../connection'
import { FIREBASE_CONSTANTS } from '../../constants'
import { vehicle_names as FORM_NAMES } from '../../../features/register/utils/inputNames'

export const verifyPlaca = async (placa) => {
	let res = false

	try {
		const querySnapshot = await db
			.collection(FIREBASE_CONSTANTS.COLLECTIONS.VEHICLE)
			.where(FORM_NAMES.NUMPLACA, '==', placa)
			.get()

		if (querySnapshot.empty) res = false

		querySnapshot.forEach((doc) => {
			if (doc.exists) res = true
		})
		return res
	} catch (err) {
		console.error(err)
		return true
	}
}
