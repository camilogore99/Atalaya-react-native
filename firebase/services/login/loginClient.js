import { auth } from '../../connection'

export const loginClient = async (
	data,
	setInitialValues,
	handleSeccionUser,
	invalidInput
) => {
	invalidInput(false, 'email')
	invalidInput(false, 'password')
	try {
		await auth.signInWithEmailAndPassword(data.email.value, data.password.value)

		setInitialValues()
		handleSeccionUser(true)
	} catch (err) {
		console.log(err)
		invalidInput(true, 'email')
		invalidInput(true, 'password')
	}
}
