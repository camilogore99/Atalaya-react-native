import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { LocationIcon } from './LocationIcon'
import { StyleSheet, View } from 'react-native'
import MapViewDirections from 'react-native-maps-directions'
import MapView, { Marker } from 'react-native-maps'

const Map = ({ mapViewRef, currentLocation, testing }) => {
	const API_KEY = 'AIzaSyAXxgheBUHJIG8JyVu-hO2hKBXnVztwoFo'
	const { initial, destination } = useSelector((state) => state.travel)

	useEffect(() => {
		const suscribe = setTimeout(() => {
			mapViewRef.current.fitToSuppliedMarkers(['mk1', 'mk2'])
		}, 800)

		return clearTimeout(suscribe)
	}, [initial, destination])

	return (
		<View style={styles.container}>
			<View style={styles.iconContent}>
				<LocationIcon name='zoom-out-map' zoom mapViewRef={mapViewRef} />
				<LocationIcon
					lat={currentLocation.latitude}
					long={currentLocation.longitude}
					name='location-on'
					mapViewRef={mapViewRef}
				/>
			</View>
			<MapView
				testID='MapId'
				ref={mapViewRef}
				style={styles.map}
				loadingEnabled={true}
				showsUserLocation={true}
				showsMyLocationButton={true}
			>
				<Marker
					identifier='mk1'
					coordinate={{
						latitude: initial.lat,
						longitude: initial.long
					}}
					pinColor='#ff8d00'
				/>
				<Marker
					identifier='mk2'
					coordinate={{
						latitude: destination.lat,
						longitude: destination.long
					}}
				/>
				{!testing && (
					<MapViewDirections
						optimizeWaypoints={true}
						origin={{
							latitude: initial.lat,
							longitude: initial.long
						}}
						destination={{
							latitude: destination.lat,
							longitude: destination.long
						}}
						apikey={API_KEY}
						strokeWidth={3}
						// waypoints={[{ latitude: 6.313587, longitude: -75.558029 }]}
						precision='high'
						lineDashPattern={[1]}
						strokeColor={'hotpink'}
					/>
				)}
			</MapView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 3
	},
	map: {
		height: '100%'
	},

	iconContent: {
		paddingHorizontal: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		position: 'absolute',
		bottom: 10,
		width: '100%',
		zIndex: 100
	}
})

export default Map
