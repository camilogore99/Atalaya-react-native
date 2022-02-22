import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { verifyDocumentId } from '../api'
import {
	handlerPersonalData,
	handlerStatusPersonalData
} from '../../../redux/actions/registerActions'
import { registerRoutes } from '../utils/routes'
import { documentsTypes } from '../utils/inputRegex'
import { useFormatDate } from '../../../hooks/useFormatDate'
import { personalData_names as FORM_NAMES } from '../utils/inputNames'
import { toUpperCase } from '../utils/toUpperCase'

export const usePersonalData = (navigation) => {
	const {
		control,
		setError,
		getValues,
		clearErrors,
		handleSubmit,
		formState: { errors }
	} = useForm()
	const dispatch = useDispatch()
	const { validateDate } = useFormatDate()

	//use for enable or disable the inputs that are not
	const [isAvailable, setAvailable] = useState(false)
	// validate if there are something loading
	const [isLoading, setIsLoading] = useState(false)

	// validate that the documentId doesnt exist
	const checkDocumentId = async () => {
		const typeId = getValues(FORM_NAMES.CODTIPOIDTERCERO)
		const document = getValues(FORM_NAMES.NUMIDTERCERO)

		if (!typeId) setError(FORM_NAMES.CODTIPOIDTERCERO)
		else if (!document || !documentsTypes[typeId].pattern.test(document)) {
			clearErrors(FORM_NAMES.CODTIPOIDTERCERO)
			setError(FORM_NAMES.NUMIDTERCERO)
		} else {
			clearErrors(FORM_NAMES.CODTIPOIDTERCERO)
			clearErrors(FORM_NAMES.NUMIDTERCERO)

			// request to the API
			setIsLoading(true)
			setAvailable(false)
			const res = await verifyDocumentId(typeId, document)
			setIsLoading(false)
			if (res) {
				// if user exists
				setError(FORM_NAMES.NUMIDTERCERO, {
					message: 'Ya existe un usuario con ese documento'
				})
			} else setAvailable(true)
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

	const onSubmit = (data) => {
		if (!isLoading) {
			dispatch(handlerPersonalData(toUpperCase(data)))
			dispatch(
				handlerStatusPersonalData({
					complete: true,
					available: false
				})
			)
			navigation.navigate(registerRoutes.register)
		}
	}

	return {
		errors,
		control,
		isLoading,
		FORM_NAMES,
		isAvailable,
		onSubmit,
		handleSubmit,
		checkDocumentId,
		checkDatePicker
	}
}
