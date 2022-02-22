import React from 'react'
import { useSelector } from 'react-redux'
import { LocationIcon } from './LocationIcon'
import { StyleSheet, Text, View } from 'react-native'

export const MapCardInfo = ({ currentLocation, mapViewRef }) => {
	const { initial, destination } = useSelector((state) => state.travel)

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<View style={styles.iconContent}>
					<Text style={styles.boldText}>{initial.address}</Text>
				</View>
				<LocationIcon
					lat={initial.lat}
					long={initial.long}
					mapViewRef={mapViewRef}
				/>
			</View>
			<View style={styles.content}>
				<View style={styles.iconContent}>
					<Text style={styles.boldText}>{destination.address}</Text>
				</View>
				<LocationIcon
					lat={destination.lat}
					long={destination.long}
					mapViewRef={mapViewRef}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 0.8,
		justifyContent: 'space-around',
		backgroundColor: 'white',
		padding: 10
	},
	boldText: {
		fontWeight: '700',
		color: '#5E5E5E',
		fontSize: 15,
		marginHorizontal: 15,
		paddingVertical: 10
	},
	content: {
		justifyContent: 'space-between',
		flexDirection: 'row'
	},
	iconContent: {
		flex: 4,
		marginRight: 15,
		alignItems: 'center',
		backgroundColor: '#F9F9F9',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 8,
		paddingRight: 30,
		flexDirection: 'row',
		borderRadius: 10
	}
})
