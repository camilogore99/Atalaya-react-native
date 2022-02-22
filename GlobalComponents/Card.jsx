import React from 'react'
import { useDispatch } from 'react-redux'
import { Text, View } from 'react-native'
import { CustomButton } from './CustomButton'
import { Image, StyleSheet } from 'react-native'
import { screensNames } from '../utils/navigationRoutes'
import { addTravelAddress } from '../redux/actions/travelActions'

export const Card = ({
	initial,
	destination,
	data,
	navigation,
	setJobsAvailables
}) => {
	const dispatch = useDispatch()

	const handleSubmit = () => {
		dispatch(addTravelAddress(data))
		navigation.navigate(screensNames.MapContent)
	}

	const hideCard = () => {
		setJobsAvailables((list) => list.filter((el) => el.id !== data.id))
	}

	return (
		<View style={styles.card} testID='cardId'>
			<View>
				<View style={styles.textContent}>
					<Image
						style={styles.icon}
						source={require('../assets/icons/availableJobs/vehicleType.png')}
					/>
					<Text style={styles.boldText}>{data.load.type}</Text>
				</View>
				<View style={styles.textContent}>
					<Image
						style={styles.icon}
						source={require('../assets/icons/availableJobs/kg.png')}
					/>
					<Text style={styles.boldText}>{data.load.weight}</Text>
				</View>
				<View style={styles.textContent}>
					<Image
						style={styles.icon}
						source={require('../assets/icons/availableJobs/final.png')}
					/>
					<Text style={styles.boldText}>{initial.address}</Text>
				</View>
				<View style={styles.textContent}>
					<Image
						style={styles.icon}
						source={require('../assets/icons/availableJobs/final.png')}
					/>
					<Text style={styles.boldText}>{destination.address}</Text>
				</View>
			</View>
			<View style={styles.buttonContent}>
				<CustomButton
					height={10}
					textClassName={{ marginHorizontal: 30 }}
					bg='orange.500'
					className={styles.button}
					handlePress={handleSubmit}
				>
					Aceptar
				</CustomButton>
				<CustomButton
					height={10}
					handlePress={hideCard}
					textClassName={{ marginHorizontal: 10, color: 'red' }}
					className={styles.button}
					bg='white'
				>
					x
				</CustomButton>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	card: {
		flex: 1,
		justifyContent: 'space-between',
		backgroundColor: '#F9F9F9',
		margin: 10,
		borderRadius: 10,
		paddingHorizontal: 15,
		paddingVertical: 8,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,

		elevation: 8
	},
	icon: {
		resizeMode: 'contain',
		width: 30,
		height: 20
	},
	textContent: {
		marginVertical: 10,
		flexDirection: 'row',
		alignItems: 'center'
	},
	buttonContent: {
		flex: 1,
		marginTop: 10,
		flexDirection: 'row',
		justifyContent: 'flex-end'
	},
	boldText: {
		marginLeft: 20,
		fontWeight: '700',
		flex: 1,
		borderBottomWidth: 1,
		borderBottomColor: '#CECECE',
		color: '#5E5E5E'
	},
	button: {
		borderRadius: 20,
		marginLeft: 20,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,

		elevation: 8
	}
})
