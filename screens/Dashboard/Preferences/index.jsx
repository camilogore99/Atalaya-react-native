import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Settings = () => {
	return (
		<View style={styles.container}>
			<Text>Estas en configuracion</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})
