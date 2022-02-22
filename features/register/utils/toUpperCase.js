export const toUpperCase = (data) => {
	return Object.entries(data).reduce((initial, current) => {
		if (typeof current[1] === 'string') {
			initial[current[0]] = current[1].toUpperCase()
		} else {
			initial[current[0]] = current[1]
		}
		return initial
	}, {})
}
