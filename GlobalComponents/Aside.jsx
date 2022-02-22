import React from 'react'
import { CustomButton } from './CustomButton'
import { View, Text, StyleSheet } from 'react-native'
import { DrawerItemList } from '@react-navigation/drawer'
import { AntDesign, FontAwesome } from '@expo/vector-icons'

export const Aside = (props) => {
	return (
		<View style={styles.container}>
			<View style={styles.contentUser}>
				<View style={styles.boxUser}>
					<AntDesign
						style={styles.styleUser}
						name='user'
						size={24}
						color='black'
					/>
				</View>
				<View style={styles.boxStar}>
					<AntDesign
						style={styles.styleStar}
						name='star'
						size={24}
						color='black'
					/>
					<AntDesign
						style={styles.styleStar}
						name='star'
						size={24}
						color='black'
					/>
					<AntDesign
						style={styles.styleStar}
						name='star'
						size={24}
						color='black'
					/>
					<AntDesign
						style={styles.styleStar}
						name='star'
						size={24}
						color='black'
					/>
					<AntDesign
						style={styles.styleStar}
						name='star'
						size={24}
						color='black'
					/>
				</View>
				<View style={styles.boxCalification}>
					<Text>4,0(16)</Text>
				</View>
			</View>

			<DrawerItemList {...props} />
			<View style={styles.contentButtons}>
				<CustomButton className={styles.styleButton}>Ejemplo</CustomButton>
				<View style={styles.boxRedes}>
					<AntDesign name='twitter' size={24} color='#ff8d00' />
					<FontAwesome
						style={{ marginLeft: 8, marginRight: 8 }}
						name='facebook'
						size={24}
						color='#ff8d00'
					/>
					<AntDesign name='instagram' size={24} color='#ff8d00' />
				</View>
			</View>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		position: 'absolute',
		width: '100%',
		top: 0,
		height: '100%',
		flex: 1,
		overflow: 'hidden'
	},
	contentUser: {
		flex: 0.3,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	boxUser: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	styleUser: {
		backgroundColor: '#ff8d00',
		padding: 20,
		borderRadius: 100,
		color: '#fff'
	},
	boxCalification: {
		flex: 1,
		alignItems: 'center'
	},
	boxStar: {
		flexDirection: 'row'
	},
	styleStar: {
		color: '#ff8d00'
	},
	contentOptions: {
		flex: 10
	},
	boxOption: {
		height: 70,
		justifyContent: 'flex-start',
		flexDirection: 'row',
		alignItems: 'center'
	},
	styleIconOption: {
		marginLeft: 16,
		marginRight: 16
	},
	styleText: {
		fontSize: 25
	},
	contentButtons: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-end',
		marginBottom: 16
	},
	styleButton: {
		width: '80%',
		borderRadius: 20
	},
	boxRedes: {
		flexDirection: 'row',
		marginTop: 30
	}
})
