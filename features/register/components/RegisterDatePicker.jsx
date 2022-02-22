import {
	View,
	Text,
	Platform,
	StyleSheet,
	TouchableOpacity
} from 'react-native'
import React, { useState } from 'react'
import { Controller } from 'react-hook-form'
import { Ionicons } from '@expo/vector-icons'
import { useFormatDate } from '../../../hooks/useFormatDate'
import DateTimePicker from '@react-native-community/datetimepicker'

export const RegisterDatePicker = ({
	err,
	name,
	control,
	placeholder,
	editable = true,
	checkDatePicker
}) => {
	const { formatDate } = useFormatDate()
	const [show, setShow] = useState(false)

	const showDatePicker = () => {
		setShow(true)
	}

	return (
		<View>
			<Controller
				control={control}
				rules={{ required: true, validate: checkDatePicker }}
				render={({ field: { onChange, value } }) => (
					<>
						<TouchableOpacity
							onPress={editable ? showDatePicker : () => null}
							style={{
								...styles.button,
								borderColor: err[name] ? '#FF2929' : '#dddddd',
								backgroundColor: editable ? 'white' : '#f1f1f1'
							}}
						>
							<View>
								{value ? (
									<Text style={styles.buttonValue}>
										{formatDate(value.toJSON())}
									</Text>
								) : (
									<Text style={styles.placeholder}>{placeholder}</Text>
								)}
							</View>
							{/* error icon */}
							{err[name] && (
								<Ionicons
									name='close-circle'
									size={20}
									color='#FF2929'
									style={{ marginRight: 5 }}
								/>
							)}
						</TouchableOpacity>
						{/* datepicker */}
						{show && (
							<DateTimePicker
								mode='date'
								value={value || new Date()}
								is24Hour={true}
								display='default'
								onChange={(value) => {
									let newValue

									if (Platform.OS === 'ios') {
										newValue = new Date(value.nativeEvent.timestamp)
									}

									if (Platform.OS === 'android') {
										newValue = value.nativeEvent.timestamp
									}
									setShow(false)
									onChange(newValue)
									checkDatePicker(newValue)
								}}
								testID='dateTimePicker'
							/>
						)}
					</>
				)}
				name={name}
			/>
			{err[name] && (
				<Text style={styles.warningText}>Seleccione una fecha correcta.</Text>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	button: {
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
	buttonValue: {
		color: 'black',
		fontSize: 14
	},
	warningText: {
		textAlign: 'right',
		color: '#FF2929',
		fontSize: 11
	},
	placeholder: {
		color: '#97989C',
		fontSize: 14
	}
})
