import { es } from 'date-fns/locale'
import { format, isAfter, isValid, parseJSON } from 'date-fns'

export const useFormatDate = () => {
	const formatDate = (date) =>
		format(parseJSON(date), 'd MMMM, yyyy', {
			locale: es
		})

	const validateDate = (date) => {
		const dateParse = parseJSON(date)

		if (isValid(dateParse)) {
			return isAfter(dateParse, new Date())
		} else {
			return false
		}
	}

	return { formatDate, validateDate }
}
