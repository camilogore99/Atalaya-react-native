import React, { useState } from 'react'
import { screensNames } from '../utils/navigationRoutes'
import { View, Text, StyleSheet, Image } from 'react-native'
import { useLogin } from '../features/login/hooks/useLogin'
import { CustomButton } from '../GlobalComponents/CustomButton'
import { CustomInput } from '../features/login/components/CustomInput'

const initialState = {
	email: {
		invalid: false,
		value: 'camilogore99@gmail.com'
	},
	password: {
		invalid: false,
		value: 'Mortadela2019!'
	}
}

export const Login = ({ navigation }) => {
	const [inputValues, setInputValues] = useState(initialState)
	const { email, password } = inputValues
	const { handleChange, handleSubmit } = useLogin(initialState, setInputValues)

	return (
		<View style={styles.container}>
			<Image style={styles.image} source={require('../assets/logo.png')} />
			<View style={styles.form}>
				<View>
					<Text style={styles.title}>Inicio de sesión.</Text>
					<Text style={styles.verse}>
						"Entonces dará lluvia a tu sementera cuando siempre la tierra, y
						dará pan del fruto y será abundante"
					</Text>
					<Text style={styles.authorVerse}> - Isaías 30:23</Text>
				</View>
				<View style={styles.formContent}>
					<CustomInput
						name='email'
						input={email}
						warningText='El correo que ingresó no existe o no está registrado.'
						handleChange={handleChange}
						placeholder='Correo electronico'
					/>
					<CustomInput
						name='password'
						type='password'
						input={password}
						placeholder='Contraseña'
						handleChange={handleChange}
						warningText='La contraseña que ingresó no existe o no corresponde al correo ingresado.'
					/>
				</View>
				<Text style={styles.recoverPassword}>
					¿Has olvidado tu contraseña?
					<Text style={styles.recoverPasswordLink}> Recuperar Cuenta</Text>
				</Text>
				<View style={styles.buttonContainer}>
					<CustomButton
						textClassName={styles.buttonText}
						textColor='#0b2370'
						bg='#dddddd'
						handlePress={() => navigation.navigate(screensNames.Register)}
					>
						Crear Cuenta
					</CustomButton>
					<CustomButton
						textClassName={styles.buttonText}
						bg='#0b2370'
						handlePress={handleSubmit(inputValues)}
					>
						Iniciar Sesión
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
	image: {
		width: 170,
		height: 130,
		alignSelf: 'center',
		resizeMode: 'stretch'
	},
	form: {
		marginTop: '15%',
		marginHorizontal: 10,
		borderRadius: 20,
		paddingBottom: 15,
		backgroundColor: '#fff',
		width: '90%',
		padding: 15
	},
	title: {
		fontSize: 24,
		color: '#0b2370',
		marginLeft: '3%',
		fontFamily: 'MontserratMedium'
	},
	verse: {
		fontSize: 12,
		marginTop: '15%',
		textAlign: 'center',
		fontFamily: 'MontserratLightItalic'
	},
	authorVerse: {
		fontSize: 12,
		color: '#0b2370',
		textAlign: 'center',
		marginTop: '2%',
		fontFamily: 'MontserratBold'
	},

	formContent: {
		justifyContent: 'space-between',
		marginTop: '5%',
		textAlign: 'center'
	},
	recoverPassword: {
		color: '#97989C',
		fontSize: 11,
		textAlign: 'center',
		marginTop: '10%',
		fontFamily: 'MontserratMedium'
	},
	recoverPasswordLink: {
		color: '#0b2370',
		fontFamily: 'MontserratBold'
	},
	buttonContainer: {
		flexDirection: 'row',
		marginTop: '10%',
		justifyContent: 'space-between'
	},
	buttonText: {
		paddingHorizontal: '8%',
		fontSize: 13
	}
})
