import { loginClient } from '../api'
import { useDispatch } from 'react-redux'
import { loginSeccion } from '../../../redux/actions/authActions'

export const useLogin = (initialValues, setter) => {
	const dispatch = useDispatch()

	// utils -------------
	const setValues = () => {
		setter(initialValues)
	}

	const invalidInput = (boolean, name) => {
		setter((state) => ({
			...state,
			[name]: {
				...state[name],
				invalid: boolean
			}
		}))
	}

	const handleSeccionUser = (boolean) => {
		dispatch(loginSeccion(boolean))
	}
	// ----------------

	const handleChange = (name, value) => {
		setter((state) => ({
			...state,
			[name]: {
				...state[name],
				value
			}
		}))
	}

	const handleSubmit = (inputValues) => () => {
		loginClient(inputValues, setValues, handleSeccionUser, invalidInput)
	}

	return {
		handleChange,
		handleSubmit
	}
}
