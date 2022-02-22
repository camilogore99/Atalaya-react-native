import React from 'react'
import { Button, Text } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const CustomButton = ({
	mT,
	mX,
	mY,
	children,
	className,
	height = 40,
	handlePress,
	textClassName,
	width = 'auto',
	bg = '#ff8d00',
	textColor = 'white'
}) => {
	return (
		<TouchableOpacity
			onPress={handlePress}
			style={{
				...className,
				width: width,
				marginTop: mT,
				height: height,
				borderRadius: 10,
				marginVertical: mY,
				backgroundColor: bg,
				marginHorizontal: mX,
				alignItems: 'center',
				justifyContent: 'center'
			}}
		>
			<Text
				style={{
					fontFamily: 'MontserratMedium',
					color: textColor,
					...textClassName
				}}
			>
				{children}
			</Text>
		</TouchableOpacity>
	)
}
