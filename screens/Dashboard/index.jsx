import React from 'react'
import 'react-native-gesture-handler'
import { Settings } from './Preferences'
import { MapContent } from './MapContent'
import { Aside } from '../../GlobalComponents/Aside'
import { AvailablesJobs } from './AvailablesJobs'
import { screensNames } from '../../utils/navigationRoutes'
import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator()

export const Dashboard = () => {
	return (
		<Drawer.Navigator drawerContent={(props) => <Aside {...props} />}>
			<Drawer.Screen
				name={screensNames.AvailablesJobs}
				component={AvailablesJobs}
			/>
			<Drawer.Screen name={screensNames.MapContent} component={MapContent} />
			<Drawer.Screen name={screensNames.Settings} component={Settings} />
		</Drawer.Navigator>
	)
}
