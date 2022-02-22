import { db } from '../../connection'
import { FIREBASE_CONSTANTS } from '../../../firebase/constants'

export const getAvailablesJobs = (setList) => {
	db.collection(FIREBASE_CONSTANTS.COLLECTIONS.TRAVEL)
		.where('state', '==', FIREBASE_CONSTANTS.TRAVEL_GENERAL_STATES.PENDING)
		.onSnapshot((snapshot) => {
			if (snapshot.docs.length === 0) {
				setList([])
			} else {
				const travel = snapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data()
				}))
				setList(travel)
			}
		})
}
