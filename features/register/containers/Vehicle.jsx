import React from 'react'
import { registerRoutes } from '../utils/routes'
import { RegisterInput } from '../components/RegisterInput'
import { RegisterPicker } from '../components/RegisterPicker'
import { View, StyleSheet, ScrollView, Image } from 'react-native'
import { CustomButton } from '../../../GlobalComponents/CustomButton'
import { useVehicleInformation } from '../hooks/useVehicleInformation'
import { RegisterInputSearch } from '../components/RegisterInputSearch'

export const Vehicle = ({ navigation }) => {
	const {
		errors,
		control,
		isLoading,
		isEditable,
		FORM_NAMES,
		setValue,
		onSubmit,
		checkPlaca,
		handleSubmit,
		wordsMatchWithName,
		validateIfValueExistsinRNDC
	} = useVehicleInformation(navigation)

	return (
		<View style={styles.container}>
			<View style={styles.form}>
				<Image
					style={styles.image}
					source={require('../../../assets/isologo.png')}
				/>
				<ScrollView>
					<RegisterInput
						err={errors}
						control={control}
						isCorrect={isEditable}
						name={FORM_NAMES.NUMPLACA}
						handleBlur={() => {
							//check if the placa is available
							checkPlaca()
						}}
						placeholder='Ingresa el número de placa'
					/>
					<RegisterPicker
						err={errors}
						type='vehículo'
						control={control}
						editable={isEditable}
						placeholder='Configuración del vehículo'
						name={FORM_NAMES.CODCONFIGURACIONUNIDADCARGA}
					/>
					<RegisterInputSearch
						err={errors}
						control={control}
						setValue={setValue}
						editable={isEditable}
						placeholder='Marca del vehículo'
						handleChange={wordsMatchWithName}
						name={FORM_NAMES.CODMARCAVEHICULOCARGA}
						handleBlur={validateIfValueExistsinRNDC(
							FORM_NAMES.CODMARCAVEHICULOCARGA
						)}
					/>
					<RegisterInputSearch
						err={errors}
						control={control}
						setValue={setValue}
						editable={isEditable}
						placeholder='Linea del vehículo'
						handleChange={wordsMatchWithName}
						name={FORM_NAMES.CODLINEAVEHICULOCARGA}
						handleBlur={validateIfValueExistsinRNDC(
							FORM_NAMES.CODLINEAVEHICULOCARGA
						)}
					/>
					{/* <RegisterInputSearch
						err={errors}
						control={control}
						setValue={setValue}
						handlerChange={searchWordsMatch}
						placeholder='Configuración del vehículo'
						name={FORM_NAMES.CODCONFIGURACIONUNIDADCARGA}
					/> */}

					{/* <RegisterPicker
						err={errors}
						control={control}
						placeholder='Configuración del vehículo'
						name={FORM_NAMES.CODCONFIGURACIONUNIDADCARGA}
					/>
					<RegisterPicker
						err={errors}
						control={control}
						placeholder='Marca del vehículo'
						name={FORM_NAMES.CODMARCAVEHICULOCARGA}
					/> */}
					{/* <RegisterInput
						type='text'
						err={errors}
						control={control}
						editable={isEditable}
						placeholder='Ingresa primer apellido'
						name={FORM_NAMES.PRIMERAPELLIDOIDTERCERO}
					/>
					<RegisterInput
						type='text'
						err={errors}
						control={control}
						editable={isEditable}
						name={FORM_NAMES.SEGUNDOAPELLIDOIDTERCERO}
						placeholder='Ingresa segundo apellido'
					/>
					<RegisterInput
						err={errors}
						type='numbers'
						control={control}
						editable={isEditable}
						name={FORM_NAMES.NUMTELEFONOCONTACTO}
						placeholder='Ingresa tú telefono'
					/>
					<RegisterInput
						err={errors}
						control={control}
						type='textNumbers'
						editable={isEditable}
						placeholder='Ingresa tú dirección'
						name={FORM_NAMES.NOMENCLATURADIRECCION}
					/>
					<RegisterPicker
						err={errors}
						control={control}
						editable={isEditable}
						placeholder='Tipo de licencia de conducir'
						name={FORM_NAMES.CODCATEGORIALICENCIACONDUCCION}
					/>
					<RegisterInput
						err={errors}
						control={control}
						editable={isEditable}
						type='numDriverLicense'
						name={FORM_NAMES.NUMLICENCIACONDUCCION}
						placeholder='Número de licencia de conducir'
					/> */}
					{/* datepicker
					<RegisterDatePicker
						err={errors}
						control={control}
						editable={isEditable}
						checkDatePicker={checkDatePicker}
						name={FORM_NAMES.FECHAVENCIMIENTOLICENCIA}
						placeholder='Fecha de vencimiento de la licencia'
					/> */}
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
							isEditable && !isLoading ? handleSubmit(onSubmit) : null
						}
					>
						Agregar vehículo
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
