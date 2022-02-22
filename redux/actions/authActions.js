export const types = {
	LOGIN_SECCION: 'LOGIN_SECCION',
	LOGOUT_SECCION: 'LOGOUT_SECCION'
}

export const loginSeccion = (data) => ({
	type: types.LOGIN_SECCION,
	payload: data
})

export const logoutSeccion = (data) => ({
	type: types.LOGOUT_SECCION,
	payload: data
})
