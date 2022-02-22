import { db } from '../../connection'
import { FIREBASE_CONSTANTS } from '../../../firebase/constants'
import { personalData_names as FORM_NAMES } from '../../../features/register/utils/inputNames'
export const verifyDocumentId = async (type, document) => {
	let res = false

	try {
		const querySnapshot = await db
			.collection(FIREBASE_CONSTANTS.COLLECTIONS.DRIVER)
			.where(FORM_NAMES.NUMIDTERCERO, '==', document)
			.where(FORM_NAMES.CODTIPOIDTERCERO, '==', type)
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
