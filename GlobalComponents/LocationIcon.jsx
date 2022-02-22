import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

export const LocationIcon = ({
	lat,
	long,
	mapViewRef,
	zoom,
	bg = '#F9F9F9',
	color = '#f97316',
	name = 'gps-fixed'
}) => {
	const onChangeMapRegion = () => {
		const data = {
			latitude: lat,
			longitude: long,
			latitudeDelta: 0,
			longitudeDelta: 0.001
		}

		mapViewRef.current.animateToRegion(data, 1000)
	}

	const setZoom = () => {
		mapViewRef.current.fitToSuppliedMarkers(['mk1', 'mk2'])
	}

	return (
		<TouchableOpacity
			onPress={zoom ? setZoom : onChangeMapRegion}
			testID='locationId'
		>
			<View style={{ backgroundColor: bg, ...styles.icon }}>
				<MaterialIcons name={name} size={24} color={color} />
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	icon: {
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
		width: 45,
		height: 45,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 0
		},
		shadowOpacity: 0.9,
		shadowRadius: 16.0,

		elevation: 2
	}
})
