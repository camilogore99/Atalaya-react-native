import { types } from '../actions/registerActions'

export const REGISTER_STATE = {
	personalData: {
		CODTIPOIDTERCERO: '',
		NUMIDTERCERO: '',
		NOMIDTERCERO: '',
		PRIMERAPELLIDOIDTERCERO: '',
		SEGUNDOAPELLIDOIDTERCERO: '',
		NUMTELEFONOCONTACTO: '',
		NOMENCLATURADIRECCION: '',
		CODCATEGORIALICENCIACONDUCCION: '',
		NUMLICENCIACONDUCCION: '',
		FECHAVENCIMIENTOLICENCIA: '',
		status: {
			complete: false,
			available: true
		}
	},
	vehicle: {
		NUMPLACA: {
			value: '',
			require: true
		},
		CODCONFIGURACIONUNIDADCARGA: {
			value: '',
			require: true
		},
		CODMARCAVEHICULOCARGA: {
			value: '',
			require: true
		},
		CODLINEAVEHICULOCARGA: {
			value: '',
			require: true
		},
		ANOFABRICACIONVEHICULOCARGA: {
			value: '',
			require: true
		},
		PESOVEHICULOVACIO: {
			value: '',
			require: true
		},
		UNIDADMEDIDACAPACIDAD: {
			value: '',
			require: true
		},
		NUMEJES: {
			value: '',
			require: false
		},
		ANOREPOTENCIACION: {
			value: '',
			require: false
		},
		CODCOLORVEHICULOCARGA: {
			value: '',
			require: false
		},
		CAPACIDADUNIDADCARGA: {
			value: '',
			require: false
		},
		CODTIPOCARROCERIA: {
			value: '',
			require: false
		},
		NUMCHASIS: {
			value: '',
			require: false
		},
		CODTIPOCOMBUSTIBLE: {
			value: '',
			require: false
		},
		NUMSEGUROSOAT: {
			value: '',
			require: false
		},
		FECHAVENCIMIENTOSOAT: {
			value: '',
			require: false
		},
		NUMNITASEGURADORASOAT: {
			value: '',
			require: false
		},
		status: {
			complete: false,
			available: false
		}
	},
	owner: {
		status: {
			complete: false,
			available: false
		}
	},
	payee: {
		status: {
			complete: false,
			available: false
		}
	}
}

export const registerReducer = (state = REGISTER_STATE, action) => {
	switch (action.type) {
		case types.ADD_PERSONAL_DATA:
			return {
				...state,
				personalData: {
					...action.payload,
					status: {
						...state.personalData.status
					}
				}
			}
		case types.CHANGE_STATUS_PERSONAL_DATA:
			return {
				...state,
				personalData: {
					...state.personalData,
					status: {
						...action.payload
					}
				},
				vehicle: {
					...state.vehicle,
					status: {
						...state.vehicle.status,
						available: true
					}
				}
			}

		default:
			return state
	}
}
