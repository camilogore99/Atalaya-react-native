import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../redux/reducers'
import { NativeBaseProvider } from 'native-base'

const store = createStore(reducer)
const inset = {
	frame: { x: 0, y: 0, width: 0, height: 0 },
	insets: { top: 0, left: 0, right: 0, bottom: 0 }
}

export const GlobalProvider = ({ children }) => {
	return (
		<Provider store={store}>
			<NativeBaseProvider initialWindowMetrics={inset}>
				{children}
			</NativeBaseProvider>
		</Provider>
	)
}
