import React from 'react'
import { Main } from './Main'
import { useFonts } from 'expo-font'
import { LogBox } from 'react-native'
import { StatusBar } from 'react-native'
import { CustomModal } from './features/modal/container/Modal'
import { GlobalProvider } from './GlobalComponents/GlobalProvider'

LogBox.ignoreLogs(['Setting a timer'])

export default function App() {
	const [loaded] = useFonts({
		MontserratLight: require('./assets/fonts/Montserrat-Light.ttf'),
		MontserratLightItalic: require('./assets/fonts/Montserrat-LightItalic.ttf'),
		MontserratMedium: require('./assets/fonts/Montserrat-Medium.ttf'),
		MontserratBold: require('./assets/fonts/Montserrat-Bold.ttf')
	})

	if (!loaded) return null

	return (
		<GlobalProvider>
			<StatusBar style='auto' />
			<CustomModal />
			<Main />
		</GlobalProvider>
	)
}
