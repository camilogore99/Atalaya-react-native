import React from 'react'
import { FlatList } from 'native-base'
import { registerRoutes } from '../utils/routes'
import { CardRegister } from '../components/CardRegister'
import { screensNames } from '../../../utils/navigationRoutes'
import { StyleSheet, Image, View, Text } from 'react-native'
import { CustomButton } from '../../../GlobalComponents/CustomButton'

export const Register = ({ navigation }) => {
	const ScreensList = Object.keys(registerRoutes).filter(
		(key) => key !== 'register'
	)

	const ItemText = ({ index }) => (
		<CardRegister
			index={index}
			navigation={navigation}
			ScreensList={ScreensList}
		/>
	)

	return (
		<View style={styles.container}>
			<View style={styles.form}>
				<Image
					style={styles.image}
					source={require('../../../assets/isologo.png')}
				/>
				<View style={styles.list}>
					<FlatList
						data={ScreensList}
						renderItem={ItemText}
						keyExtractor={(item) => item}
					/>
				</View>
				<View>
					<Text style={styles.privacityText}>
						Al hacer clic en <Text style={styles.textBold}>"Registrarse"</Text>,
						aceptas nuestras <Text style={styles.textBold}>Condiciones</Text> y{' '}
						<Text style={styles.textBold}>
							Politicas de tratamiento de datos
						</Text>
					</Text>
					<Text style={styles.goToLogin}>
						¿Ya tienes una cuenta?
						<Text
							onPress={() => navigation.navigate(screensNames.Login)}
							style={styles.goToLoginLink}
						>
							{' '}
							Iniciar Sesión.
						</Text>
					</Text>
				</View>
				<View style={styles.buttonContainer}>
					<CustomButton
						bg='#dddddd'
						textColor='#0b2370'
						width='100%'
						textClassName={styles.buttonText1}
						handlePress={() => navigation.navigate(screensNames.Login)}
					>
						Atrás
					</CustomButton>

					<CustomButton
						width='100%'
						bg='#0b2370'
						textClassName={styles.buttonText2}
					>
						Registrarse
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
		backgroundColor: '#fff',
		borderRadius: 20,
		padding: 20,
		width: '90%'
	},
	image: {
		width: 100,
		height: 100,
		alignSelf: 'center',
		resizeMode: 'stretch'
	},
	list: {
		marginTop: '8%'
	},
	textBold: {
		fontFamily: 'MontserratBold'
	},
	privacityText: {
		marginTop: '10%',
		color: '#97989C',
		fontSize: 11,
		textAlign: 'center',
		fontFamily: 'MontserratMedium'
	},
	goToLogin: {
		color: '#97989C',
		fontSize: 11,
		textAlign: 'center',
		marginTop: '10%',
		fontFamily: 'MontserratMedium'
	},
	goToLoginLink: {
		color: '#0b2370',
		fontFamily: 'MontserratBold'
	},
	buttonContainer: {
		flexDirection: 'row',
		marginTop: '10%',
		justifyContent: 'space-between'
	},
	buttonText1: {
		paddingHorizontal: '16%',
		fontSize: 13
	},
	buttonText2: {
		paddingHorizontal: '10%',
		fontSize: 13
	}
})
