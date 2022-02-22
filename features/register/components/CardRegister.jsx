import React from 'react'
import { useSelector } from 'react-redux'
import { FontAwesome } from '@expo/vector-icons'
import { registerRoutes } from '../utils/routes'
import { Text, StyleSheet, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const CardRegister = ({ index, ScreensList, navigation }) => {
	const { status } = useSelector((state) => state.register[ScreensList[index]])

	return (
		<TouchableOpacity
			style={
				status.available
					? { ...styles.containerAvailable, ...styles.container }
					: { ...styles.containerUnavailable, ...styles.container }
			}
			onPress={() => {
				status.available &&
					navigation.navigate(registerRoutes[ScreensList[index]])
			}}
		>
			<View>
				<Text
					style={
						status.available
							? { ...styles.textColorAvailable, ...styles.text }
							: { ...styles.textColorUnavailable, ...styles.text }
					}
				>
					{registerRoutes[ScreensList[index]]}
				</Text>
			</View>

			<View>
				{status.complete && (
					<FontAwesome name='check-circle' size={20} color='#0b2370' />
				)}
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'space-between',
		borderColor: '#dddddd',
		alignItems: 'center',
		flexDirection: 'row',
		marginVertical: 10,
		borderRadius: 6,
		borderWidth: 1,
		width: '100%',
		height: 42,
		padding: 5
	},
	containerAvailable: {
		backgroundColor: '#0b2370'
	},
	containerUnavailable: {
		backgroundColor: 'white'
	},
	text: {
		fontFamily: 'MontserratMedium',
		paddingLeft: 15,
		fontSize: 13
	},
	textColorAvailable: {
		color: '#fff'
	},
	textColorUnavailable: {
		color: '#a1a1a1'
	}
})
