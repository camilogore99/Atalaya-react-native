import Map from '../Map'
import React from 'react'
import { GlobalProvider } from '../GlobalProvider'
import { render } from '@testing-library/react-native'

let Component
let handleEvents = jest.fn()
let data = {
	latitude: 6.309362,
	longitude: -75.555795,
	current: {
		fitToSuppliedMarkers: handleEvents,
		animateToRegion: handleEvents,
		fitToSuppliedMarkers: handleEvents
	}
}

describe('Map', () => {
	beforeEach(() => {
		Component = render(
			<GlobalProvider>
				<Map mapViewRef={data} currentLocation={data} testing />
			</GlobalProvider>
		)
	})

	it('check that render', () => {
		const { getByTestId } = Component

		expect(getByTestId('MapId'))
		expect(getByTestId('MapId')).toHaveProperty('type', 'AIRMap')
	})
})
