import React from 'react'
import { Card } from '../Card'
import { GlobalProvider } from '../GlobalProvider'
import { fireEvent, render } from '@testing-library/react-native'

const data = {
	initial: {
		address: 'initial address'
	},
	destination: {
		address: 'destination address'
	},
	load: {
		type: 'type 1',
		weight: '22 kg'
	},
	navigate: jest.fn()
}

let Component

describe('Card', () => {
	beforeEach(() => {
		Component = render(
			<GlobalProvider>
				<Card
					initial={data.initial}
					destination={data.destination}
					data={data}
					navigation={data}
				/>
			</GlobalProvider>
		)
	})

	it('should render the address', () => {
		const { getByText } = Component

		getByText(data.initial.address)
		getByText(data.destination.address)
	})

	it('press on navigation navigate function', () => {
		const { getByText } = Component

		const {
			mock: { calls }
		} = data.navigate

		fireEvent.press(getByText('Aceptar'))
		fireEvent.press(getByText('Aceptar'))

		expect(calls).toHaveLength(2)
	})
})
