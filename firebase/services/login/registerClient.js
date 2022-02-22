import { auth, db } from '../../connection'
import { ClientModel } from '../../models/ClientModel'

export const registerClient = async (data, handleModal, setInputsValues) => {
	if (validateData(data, handleModal)) {
		const dataForSave = ClientModel(
			data.nameFull,
			data.phone,
			data.email,
			data.infoDate,
			data.password
		)

		try {
			const newDriver = await auth.createUserWithEmailAndPassword(
				dataForSave.email,
				dataForSave.password
			)

			await db.collection('driver').doc().set(newDriver)

			setInputsValues()
		} catch (err) {
			handleModal(true, err.message)
		}
	}
}

const validateData = (data, handleModal) => {
	let token = true

	const regex = {
		nameFull: {
			regex: /^[a-zA-ZÀ-ÿ\s]{1,80}$/,
			message: 'El nombre debe contener solo letras'
		},
		phone: {
			regex: /^\d{10,10}$/,
			message: 'El número es invalido'
		},
		email: {
			regex: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
			message: 'El correo es invalido'
		},
		infoDate: {
			regex: /^/,
			message: ''
		},
		password: {
			regex:
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?._&])[A-Za-z\d$@$!%*?._&]{8,15}/,
			message:
				'la contraseña debe tener un tamaño mínimo de 8 caracteres y un máximo de 15, además debe contener como mínimo una mayúscula, minúscula, número y un carácter especial ($@$!%*?._&).'
		}
	}

	Object.entries(data).every(([key, value]) => {
		if (key === 'confirmPassword') {
			if (value !== data.password) {
				handleModal(true, 'Las contraseñas no coinciden')
				token = false
				return false
			} else return true
		} else if (key === 'age') {
			if (value < 18) {
				handleModal(true, 'Debes ser mayor de edad')
				token = false
				return false
			} else return true
		} else {
			if (!regex[key].regex.test(value)) {
				handleModal(true, regex[key].message)
				token = false
				return false
			} else return true
		}
	})

	return token
}
