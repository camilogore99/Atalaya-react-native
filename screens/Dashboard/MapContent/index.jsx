import {
	backgroundLocationPermissions,
	locationPermissions
} from '../../../utils/locationMethods'
import Map from '../../../GlobalComponents/Map'
import { View, StyleSheet } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { MapCardInfo } from '../../../GlobalComponents/MapCardInfo'
import { useHandleModal } from '../../../features/modal/hooks/useHandleModal'

const initialState = {
	latitude: 6.30896,
	longitude: -75.5553369
}

export const MapContent = () => {
	const mapViewRef = useRef(null)
	const { handleModal } = useHandleModal()
	let [location, setLocation] = useState(initialState)

	useEffect(() => {
		;(async () => {
			try {
				await locationPermissions(handleModal, setLocation)
				await backgroundLocationPermissions(setLocation)
			} catch (err) {
				console.error(err)
			}
		})()
	}, [])

	return (
		<View style={styles.container}>
			<Map mapViewRef={mapViewRef} currentLocation={location} />
			<MapCardInfo mapViewRef={mapViewRef} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: 'relative'
	},
	icon: {
		top: 0,
		right: 0,
		position: 'absolute',
		borderRadius: 5,
		marginLeft: 15,
		backgroundColor: '#f97316',
		justifyContent: 'center',
		alignItems: 'center',
		height: 45,
		width: 45
	}
})
