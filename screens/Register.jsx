import React from 'react'
import { Vehicle } from '../features/register/containers/Vehicle'
import { registerRoutes } from '../features/register/utils/routes'
import { Register } from '../features/register/containers/Register'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PersonalData } from '../features/register/containers/PersonalData'

const Stack = createNativeStackNavigator()

export const RegisterRouter = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name={registerRoutes.register} component={Register} />
			<Stack.Screen
				name={registerRoutes.personalData}
				component={PersonalData}
			/>
			<Stack.Screen name={registerRoutes.vehicle} component={Vehicle} />
		</Stack.Navigator>
	)
}
