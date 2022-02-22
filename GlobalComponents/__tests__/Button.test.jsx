import React from 'react'
import { CustomButton } from '../CustomButton'
import { GlobalProvider } from '../GlobalProvider'
import { fireEvent, render } from '@testing-library/react-native'

let Component
let onPress = jest.fn()

describe('Button', () => {
	beforeEach(() => {
		Component = render(
			<GlobalProvider>
				<CustomButton handlePress={onPress}>Aceptar</CustomButton>
			</GlobalProvider>
		)
	})

	it('render Text', () => {
		const { getByText } = Component

		getByText('Aceptar')
	})

	it('render Text', () => {
		const { getByText } = Component

		getByText('Aceptar')
	})

	it('press function call', () => {
		const { getByText } = Component
		const {
			mock: { calls }
		} = onPress

		fireEvent.press(getByText('Aceptar'))

		expect(calls).toHaveLength(1)
	})
})
