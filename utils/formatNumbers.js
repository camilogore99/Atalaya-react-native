export const formatNumber = (number) => {
	number = String(number).replace(/\D/g, '')
	return number === '' ? number : Number(number).toLocaleString()
}

export const removeDotNumber = (number) => {
	if (typeof number === 'string') return number.replace(/\./g, '')
	else return number
}
