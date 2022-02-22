import React from 'react'
import { Login } from './screens/Login'
import { StatusBar } from 'react-native'
import { useSelector } from 'react-redux'
import { Dashboard } from './screens/Dashboard'
import { RegisterRouter } from './screens/Register'
import { screensNames } from './utils/navigationRoutes'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export const Main = () => {
	const seccionUser = useSelector((state) => state.auth.seccion)

	return (
		<NavigationContainer>
			<StatusBar style='auto' />
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				{seccionUser ? (
					<Stack.Screen name={screensNames.Dashboard} component={Dashboard} />
				) : (
					<Stack.Screen name={screensNames.Login} component={Login} />
				)}
				<Stack.Screen name={screensNames.Register} component={RegisterRouter} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}
