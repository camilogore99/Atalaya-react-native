import React from 'react'
import { Select } from 'native-base'
import { Controller } from 'react-hook-form'
import { selectItems } from '../utils/select.Items'
import { StyleSheet, Text, View } from 'react-native'

export const RegisterPicker = ({
	err,
	name,
	type,
	control,
	placeholder,
	editable = true,
	checkDocumentId
}) => {
	return (
		<View>
			<Controller
				control={control}
				rules={{ required: true }}
				render={({ field: { onChange, onBlur, value } }) => (
					<Select
						borderColor={err[name] ? '#FF2929' : '#dddddd'}
						backgroundColor={editable ? '#fff' : '#dddddd'}
						onValueChange={(value) => {
							onChange(value)
							checkDocumentId && checkDocumentId()
						}}
						placeholderTextColor='#97989C'
						placeholder={placeholder}
						isDisabled={!editable}
						style={styles.select}
						selectedValue={value}
						onBlur={onBlur}
						boxSize={10}
						mt={3}
					>
						{selectItems[name]
							.filter((item) => item.type === type)
							.map((item, i) => (
								<Select.Item key={i} label={item.label} value={item.value} />
							))}
					</Select>
				)}
				name={name}
			/>
			{err[name] && (
				<Text style={styles.warningText}>
					Seleccione un tipo de documento valido.
				</Text>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	select: {
		fontSize: 14,
		alignItems: 'center'
	},
	warningText: {
		textAlign: 'right',
		color: '#FF2929',
		fontSize: 11
	}
})
