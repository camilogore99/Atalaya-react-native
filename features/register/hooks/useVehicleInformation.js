import { useState } from 'react'
import { verifyPlaca } from '../api'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import rndcData from '../utils/rndc.data.json'
import {
	handlerPersonalData,
	handlerStatusPersonalData
} from '../../../redux/actions/registerActions'
import { registerRoutes } from '../utils/routes'
import { useFormatDate } from '../../../hooks/useFormatDate'
import { vehicle_names as FORM_NAMES, vehicle_names } from '../utils/inputNames'

export const useVehicleInformation = (navigation) => {
	const {
		control,
		setError,
		setValue,
		getValues,
		clearErrors,
		handleSubmit,
		formState: { errors }
	} = useForm()
	const dispatch = useDispatch()
	const { validateDate } = useFormatDate()

	//use for enable or disable the inputs that are not
	const [isEditable, setEditable] = useState(false)
	// validate if there are something loading
	const [isLoading, setIsLoading] = useState(false)

	// validate that the documentId doesnt exist
	const checkPlaca = async () => {
		const numPlaca = getValues(FORM_NAMES.NUMPLACA)

		if (!numPlaca || numPlaca.length !== 6) setError(FORM_NAMES.NUMPLACA)
		else {
			clearErrors(FORM_NAMES.NUMPLACA)

			// request to the API
			setIsLoading(true)
			setEditable(false)
			const res = await verifyPlaca(numPlaca.toUpperCase())
			setIsLoading(false)
			if (res) {
				// if placa exists
				setError(FORM_NAMES.NUMPLACA, {
					message: 'Ya existe un vehículo con esa placa'
				})
			} else setEditable(true)
		}
	}

	const checkDatePicker = (date) => {
		const isCorrect = validateDate(date?.toJSON())
		if (isCorrect) {
			clearErrors(FORM_NAMES.FECHAVENCIMIENTOLICENCIA)
			return true
		} else {
			setError(FORM_NAMES.FECHAVENCIMIENTOLICENCIA, { type: 'pattern' })
			return false
		}
	}

	const wordsMatchWithName = (name, value) => {
		const dataFilter = rndcData[name].filter((element) => {
			const nameLowerCase = element.NOMBRE.toLowerCase()
			const valueLowerCase = value?.toLowerCase() || ''

			if (nameLowerCase.includes(valueLowerCase)) return true
			else return false
		})
		dataFilter.splice(10)

		return dataFilter
	}

	const onSubmit = (data) => {
		if (!isLoading) {
			dispatch(handlerPersonalData(data))
			dispatch(
				handlerStatusPersonalData({
					complete: true,
					available: false
				})
			)
			navigation.navigate(registerRoutes.register)
		}
	}

	const validateIfValueExistsinRNDC = (name) => (setIsCorrect) => {
		const value = getValues(name)

		const dataFilter = rndcData[name].filter((element) => {
			const elementLowerCase = element.NOMBRE.toLowerCase()
			const valueLowerCase = value?.toLowerCase() || ''

			if (elementLowerCase === valueLowerCase) return true
			else return false
		})

		if (dataFilter.length === 0) {
			setError(name, { type: 'pattern' })
			setIsCorrect(false)
			return false
		} else {
			clearErrors(name)
			setIsCorrect(true)
			return true
		}
	}

	return {
		errors,
		control,
		isLoading,
		isEditable,
		FORM_NAMES,
		setValue,
		onSubmit,
		checkPlaca,
		setEditable,
		handleSubmit,
		checkDatePicker,
		wordsMatchWithName,
		validateIfValueExistsinRNDC
	}
}
