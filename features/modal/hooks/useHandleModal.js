import { useDispatch } from 'react-redux'
import { modalVisible } from '../../../redux/actions/modalActions'

export const useHandleModal = () => {
	const dispacth = useDispatch()

	const handleModal = (isVisible, message = null, textButton = null) => {
		dispacth(modalVisible({ isVisible, message, textButton }))
	}

	return { handleModal }
}
