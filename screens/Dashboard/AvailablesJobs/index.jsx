import { StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Card } from '../../../GlobalComponents/Card'
import { View, ScrollView, Text } from 'react-native'
import { getAvailablesJobs } from '../../../firebase/services/Dashboard/getAvailablesJobs'

export const AvailablesJobs = ({ navigation }) => {
	const [jobsAvailables, setJobsAvailables] = useState(null)

	useEffect(() => {
		getAvailablesJobs(setJobsAvailables)
	}, [])

	return (
		<ScrollView style={styles.container}>
			<View>
				{!jobsAvailables && <Text style={styles.text}>Cargando</Text>}
				{jobsAvailables?.map((el) => (
					<Card
						key={el.id}
						initial={el.initial}
						destination={el.destination}
						data={el}
						navigation={navigation}
						setJobsAvailables={setJobsAvailables}
					/>
				))}
				{jobsAvailables?.length === 0 && (
					<Text style={styles.text}>No hay viajes disponibles en tú zona</Text>
				)}
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	text: {
		marginTop: 50,
		fontSize: 26,
		color: '#5E5E5E',
		textAlign: 'center'
	},
	container: {
		backgroundColor: '#f0f0f0'
	}
})
