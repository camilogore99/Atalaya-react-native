import React, { useState } from 'react'
import { Controller } from 'react-hook-form'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons'

export const RegisterInputSearch = ({
	err,
	name,
	control,
	setValue,
	placeholder,
	required = true,
	editable = true,
	handleBlur = () => {},
	handleFocus = () => {},
	handleChange = () => {}
}) => {
	const [isCorrect, setIsCorrect] = useState(false)
	const [showSuggest, setShowSuggest] = useState(false)
	const [wordsFiltered, setWordsFiltered] = useState([])
	return (
		<>
			<View>
				<Controller
					name={name}
					control={control}
					rules={{
						required
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<>
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
									onSubmitEditing={() => {
										setShowSuggest(false)
										setWordsFiltered([])
									}}
									value={value}
									editable={editable}
									placeholder={placeholder}
									autoCapitalize='characters'
									onBlur={(value) => {
										onBlur(value)
										handleBlur(setIsCorrect)
									}}
									placeholderTextColor='#97989C'
									onChangeText={(value) => {
										onChange(value)
										setWordsFiltered(handleChange(name, value))
									}}
									onFocus={() => {
										handleFocus()
										setShowSuggest(true)
										setWordsFiltered(handleChange(name, value))
									}}
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
								{showSuggest && (
									<AntDesign
										name='closesquareo'
										size={20}
										color='#FF2929'
										style={{ marginRight: 15 }}
										onPress={() => setShowSuggest(false)}
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
						</>
					)}
				/>
				{err[name] && (
					<Text style={styles.warningText}>
						{err?.[name]?.message || 'El campo es incorrecto.'}
					</Text>
				)}
				{/* SuggestContainer */}
				{wordsFiltered.length > 0 && showSuggest && (
					<View style={styles.suggestContainer}>
						{wordsFiltered.map((word, i) => {
							return (
								<TextInput
									key={i}
									onFocus={() => {
										setWordsFiltered([])
										setShowSuggest(false)
										setValue(name, word.NOMBRE)
										handleBlur(setIsCorrect)
									}}
									style={
										i % 2 === 0
											? styles.suggestTextWithOpacity
											: styles.suggestTextWithoutOpacity
									}
								>
									{word.NOMBRE}
								</TextInput>
							)
						})}
					</View>
				)}
			</View>
		</>
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
	},
	suggestContainer: {
		width: '95%',
		borderColor: '#dddddd',
		borderWidth: 1,
		borderRadius: 7,
		borderTopLeftRadius: 0,
		borderTopRightRadius: 0,
		borderTopColor: '#fff',
		alignSelf: 'center',
		backgroundColor: '#fff'
	},
	suggestTextWithOpacity: {
		paddingVertical: 5,
		backgroundColor: '#eee'
	},
	suggestTextWithoutOpacity: {
		paddingVertical: 5
	}
})
