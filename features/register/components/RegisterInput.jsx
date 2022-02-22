import React from 'react'
import { Controller } from 'react-hook-form'
import { Ionicons } from '@expo/vector-icons'
import { inputRegex } from '../utils/inputRegex'
import { FontAwesome } from '@expo/vector-icons'
import { StyleSheet, Text, TextInput, View } from 'react-native'

export const RegisterInput = ({
	err,
	name,
	control,
	isCorrect,
	placeholder,
	editable = true,
	handleBlur = () => {},
	handleChange = () => {}
}) => {
	return (
		<View>
			<Controller
				name={name}
				control={control}
				rules={{
					required: true,
					pattern: inputRegex[name].pattern,
					maxLength: inputRegex[name].maxLength
				}}
				render={({ field: { onChange, onBlur, value } }) => (
					<View
						style={{
							...styles.inputContainer,
							borderColor: err[name]
								? '#FF2929'
								: isCorrect
								? 'green'
								: '#dddddd',
							backgroundColor: editable ? 'white' : '#f1f1f1'
						}}
					>
						<TextInput
							value={value}
							editable={editable}
							placeholder={placeholder}
							autoCapitalize='characters'
							placeholderTextColor='#97989C'
							keyboardType={inputRegex[name].type}
							maxLength={inputRegex[name].maxLength}
							onBlur={(value) => handleBlur(onBlur(value))}
							onChangeText={(value) => handleChange(onChange(value))}
							style={{
								width: '92%',
								fontSize: 14,
								color: 'black'
							}}
						/>
						{err[name] && (
							<Ionicons
								size={20}
								color='#FF2929'
								name='close-circle'
								style={{ marginRight: 5 }}
							/>
						)}
						{isCorrect && (
							<FontAwesome
								size={20}
								color='green'
								name='check-circle'
								style={{ marginRight: 5 }}
							/>
						)}
					</View>
				)}
			/>
			{err[name] && (
				<Text style={styles.warningText}>
					{err?.[name]?.message || 'El campo es incorrecto.'}
				</Text>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	inputContainer: {
		height: 40,
		marginTop: 13,
		borderWidth: 1,
		borderRadius: 7,
		paddingLeft: 15,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'white',
		justifyContent: 'space-between'
	},
	warningText: {
		fontSize: 11,
		textAlign: 'right',
		color: '#FF2929'
	}
})
