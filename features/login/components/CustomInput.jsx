import React from 'react'
import { Input } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, Text } from 'react-native'

export const CustomInput = ({
	warningText = 'Los datos son incorrectos',
	backgroundColor = 'white',
	handleChange,
	type = 'text',
	placeholder,
	input,
	name
}) => {
	return (
		<>
			<Input
				onChangeText={(text) => handleChange(name, text)}
				InputRightElement={
					input.invalid && (
						<Ionicons
							name='close-circle'
							size={20}
							color='#FF2929'
							style={{ marginRight: 5 }}
						/>
					)
				}
				backgroundColor={backgroundColor}
				borderColor={input.invalid ? '#FF2929' : '#dddddd'}
				placeholder={placeholder}
				value={input.value}
				testID='inputId'
				type={type}
				size='sm'
				h={10}
				py={0}
				mt={3}
			/>
			<Text style={styles.warningText}>{input.invalid && warningText}</Text>
		</>
	)
}

const styles = StyleSheet.create({
	warningText: {
		textAlign: 'right',
		color: '#FF2929',
		fontSize: 11
	}
})
