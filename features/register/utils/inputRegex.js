import { REGISTER_STATE } from '../../../redux/reducers/registerReducer'

const inputRegex = { ...REGISTER_STATE.personalData, ...REGISTER_STATE.vehicle }
// personalData ----------------------------------------------
inputRegex.NUMIDTERCERO = {
	pattern: /^[0-9]{5,15}$/,
	type: 'numeric',
	maxLength: 15
}
inputRegex.NOMIDTERCERO = {
	pattern: /^[a-zA-Z ]{1,100}$/,
	type: 'default',
	maxLength: 100
}
inputRegex.PRIMERAPELLIDOIDTERCERO = {
	pattern: /^[a-zA-Z ]{1,100}$/,
	type: 'default',
	maxLength: 100
}
inputRegex.SEGUNDOAPELLIDOIDTERCERO = {
	pattern: /^[a-zA-Z ]{1,100}$/,
	type: 'default',
	maxLength: 100
}
inputRegex.NUMTELEFONOCONTACTO = {
	pattern: /^[0-9]{7,10}$/,
	type: 'numeric',
	maxLength: 10
}
inputRegex.NOMENCLATURADIRECCION = {
	pattern: /^[A-Za-z0-9 #-]*$/,
	type: 'default',
	maxLength: 60
}
inputRegex.NUMLICENCIACONDUCCION = {
	pattern: /^[0-9]{5,15}$/,
	type: 'numeric',
	maxLength: 15
}
// vehicle -------------------------------------------
inputRegex.NUMPLACA = {
	pattern: /^[A-Za-z0-9]{6,6}$/,
	type: 'default',
	maxLength: 6
}

// _______ select types __________
const documentsTypes = {
	C: {
		pattern: /^((\d{8})|(\d{10})|(\d{11})|(\d{6}-\d{5}))?$/,
		maxLength: null
	},
	N: {
		pattern: /^[0-9]{6,15}$/,
		maxLength: null
	},
	E: {
		pattern: /^((\d{8})|(\d{10})|(\d{11})|(\d{6}-\d{5}))?$/,
		maxLength: null
	},
	T: {
		pattern: /^((\d{8})|(\d{10})|(\d{11})|(\d{6}-\d{5}))?$/,
		maxLength: null
	},
	U: {
		pattern: '',
		maxLength: 20
	}
}

export { inputRegex, documentsTypes }
