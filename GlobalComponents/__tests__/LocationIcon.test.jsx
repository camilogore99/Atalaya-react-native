import React from 'react'
import { LocationIcon } from '../LocationIcon'
import { fireEvent, render } from '@testing-library/react-native'

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

describe('LocationIcon', () => {
	it('Check that render', () => {
		const { getByTestId } = render(
			<LocationIcon
				lat={data.latitude}
				long={data.longitude}
				mapViewRef={data}
			/>
		)

		expect(getByTestId('locationId'))
	})

	it('Check functions', () => {
		const { mock } = handleEvents
		const { getByTestId, rerender } = render(
			<LocationIcon
				lat={data.latitude}
				long={data.longitude}
				mapViewRef={data}
			/>
		)
		fireEvent.press(getByTestId('locationId'))
		expect(mock.calls).toHaveLength(1)

		rerender(
			<LocationIcon
				lat={data.latitude}
				long={data.longitude}
				mapViewRef={data}
				zoom
			/>
		)
		fireEvent.press(getByTestId('locationId'))
		expect(mock.calls).toHaveLength(2)
	})
})
