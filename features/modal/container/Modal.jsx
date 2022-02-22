import React from 'react'
import { Button, Modal } from 'native-base'
import { useSelector, useDispatch } from 'react-redux'
import { modalVisible } from '../../../redux/actions/modalActions'

export const CustomModal = () => {
	const { message, textButton, isVisible } = useSelector((state) => state.modal)
	const dispatch = useDispatch()

	return (
		<Modal isOpen={isVisible} onClose={() => dispatch(modalVisible(false))}>
			<Modal.Content maxWidth='400px'>
				<Modal.CloseButton />
				<Modal.Header>Atención</Modal.Header>
				<Modal.Body>{message}</Modal.Body>
				<Modal.Footer>
					<Button.Group variant='ghost' space={2}>
						<Button
							onPress={() => {
								dispatch(modalVisible(false))
							}}
						>
							{textButton}
						</Button>
					</Button.Group>
				</Modal.Footer>
			</Modal.Content>
		</Modal>
	)
}
