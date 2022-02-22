export const FIREBASE_CONSTANTS = {
	COLLECTIONS: {
		CLIENT: 'client',
		TRAVEL: 'travel',
		DRIVER: 'driver',
		VEHICLE: 'vehicle'
	},
	REF: {
		ON_COURSE: 'travelOnCourse'
	},
	TRAVEL_GENERAL_STATES: {
		FREE: 'Sin Operador asignado',
		PENDING: 'En Negociación',
		ON_COURSE: 'En transcurso',
		FINISHED: 'Viaje Terminado'
	},
	TRAVEL_DRIVER_STATES: {
		FREE: 'Sin conductor asignado',
		PENDING: 'En Negociación',
		READY: 'Esperando aprobación'
	}
}
