export const types = {
	MODAL_VISIBLE: 'MODAL_VISIBLE'
}

export const modalVisible = (data) => ({
	type: types.MODAL_VISIBLE,
	payload: data
})
