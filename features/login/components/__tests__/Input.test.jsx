import React from 'react'
import { CustomInput } from '../CustomInput'
import { fireEvent, render } from '@testing-library/react-native'
import { GlobalProvider } from '../../../../GlobalComponents/GlobalProvider'

describe('Input', () => {
	const props = {
		input: {
			invalid: false,
			value: 'example@example.com'
		}
	}
	const onChange = jest.fn()

	const { getByTestId } = render(
		<GlobalProvider>
			<CustomInput name='input' input={props.input} handleChange={onChange} />
		</GlobalProvider>
	)
	it('check onchange function', () => {
		const input = getByTestId('inputId')
		const {
			mock: { calls }
		} = onChange

		fireEvent.changeText(input, 'Testing v1')
		fireEvent.changeText(input, 'Testing v2')

		expect(calls).toHaveLength(2)
		expect(calls[0][0]).toEqual('input')
		expect(calls[0][1]).toEqual('Testing v1')
		expect(calls[1][1]).toEqual('Testing v2')
	})
})
