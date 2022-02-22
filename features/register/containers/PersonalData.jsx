import React from 'react'
import { registerRoutes } from '../utils/routes'
import { usePersonalData } from '../hooks/usePersonalData'
import { RegisterInput } from '../components/RegisterInput'
import { RegisterPicker } from '../components/RegisterPicker'
import { CustomButton } from '../../../GlobalComponents/CustomButton'
import { View, StyleSheet, ScrollView, Image } from 'react-native'
import { RegisterDatePicker } from '../components/RegisterDatePicker'

export const PersonalData = ({ navigation }) => {
	const {
		errors,
		control,
		isLoading,
		isAvailable,
		FORM_NAMES,
		onSubmit,
		handleSubmit,
		checkDocumentId,
		checkDatePicker
	} = usePersonalData(navigation)

	return (
		<View style={styles.container}>
			<View style={styles.form}>
				<Image
					style={styles.image}
					source={require('../../../assets/isologo.png')}
				/>
				<ScrollView>
					<RegisterPicker
						err={errors}
						control={control}
						//check if the document is available
						checkDocumentId={checkDocumentId}
						name={FORM_NAMES.CODTIPOIDTERCERO}
						placeholder='Tipo documento de identidad'
					/>
					<RegisterInput
						err={errors}
						control={control}
						isCorrect={isAvailable}
						name={FORM_NAMES.NUMIDTERCERO}
						handleBlur={() => {
							//check if the document is available
							checkDocumentId()
						}}
						placeholder='Ingresa tú documento de identidad'
					/>
					<RegisterInput
						err={errors}
						control={control}
						editable={isAvailable}
						name={FORM_NAMES.NOMIDTERCERO}
						placeholder='Ingresa el nombre'
					/>
					<RegisterInput
						err={errors}
						control={control}
						editable={isAvailable}
						placeholder='Ingresa primer apellido'
						name={FORM_NAMES.PRIMERAPELLIDOIDTERCERO}
					/>
					<RegisterInput
						err={errors}
						control={control}
						editable={isAvailable}
						placeholder='Ingresa segundo apellido'
						name={FORM_NAMES.SEGUNDOAPELLIDOIDTERCERO}
					/>
					<RegisterInput
						err={errors}
						control={control}
						editable={isAvailable}
						placeholder='Ingresa tú telefono'
						name={FORM_NAMES.NUMTELEFONOCONTACTO}
					/>
					<RegisterInput
						err={errors}
						control={control}
						editable={isAvailable}
						placeholder='Ingresa tú dirección'
						name={FORM_NAMES.NOMENCLATURADIRECCION}
					/>
					<RegisterPicker
						err={errors}
						control={control}
						editable={isAvailable}
						placeholder='Tipo de licencia de conducir'
						name={FORM_NAMES.CODCATEGORIALICENCIACONDUCCION}
					/>
					<RegisterInput
						err={errors}
						control={control}
						editable={isAvailable}
						name={FORM_NAMES.NUMLICENCIACONDUCCION}
						placeholder='Número de licencia de conducir'
					/>
					{/* datepicker */}
					<RegisterDatePicker
						err={errors}
						control={control}
						editable={isAvailable}
						checkDatePicker={checkDatePicker}
						name={FORM_NAMES.FECHAVENCIMIENTOLICENCIA}
						placeholder='Fecha de vencimiento de la licencia'
					/>
				</ScrollView>
				<View style={styles.buttonContainer}>
					<CustomButton
						bg='#dddddd'
						textColor='#0b2370'
						textClassName={styles.buttonText1}
						handlePress={() => navigation.navigate(registerRoutes.register)}
					>
						Atrás
					</CustomButton>
					<CustomButton
						bg='#0b2370'
						title='submit'
						textClassName={styles.buttonText2}
						handlePress={
							isAvailable && !isLoading ? handleSubmit(onSubmit) : null
						}
					>
						Agregar datos
					</CustomButton>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#dddddd'
	},
	form: {
		height: '90%',
		backgroundColor: '#fff',
		borderRadius: 20,
		padding: 20,
		width: '90%'
	},
	image: {
		width: 100,
		height: 100,
		marginBottom: 50,
		alignSelf: 'center',
		resizeMode: 'stretch'
	},
	textContent: {
		flex: 0.5,
		backgroundColor: 'red',
		height: '30%'
	},
	buttonContainer: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		marginTop: 20
	},
	buttonText1: {
		paddingHorizontal: '15%',
		fontSize: 13
	},
	buttonText2: {
		paddingHorizontal: '6%',
		fontSize: 13
	}
})
