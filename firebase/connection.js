import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import firebase from 'firebase/app'

const firebaseConfig = {
	apiKey: 'AIzaSyAHKg0g6D6vXYnkYGZHWMrszXYfH_u3tNA',
	authDomain: 'atalayamobile-d5e9d.firebaseapp.com',
	databaseURL: 'https://atalayamobile-d5e9d-default-rtdb.firebaseio.com',
	projectId: 'atalayamobile-d5e9d',
	storageBucket: 'atalayamobile-d5e9d.appspot.com',
	messagingSenderId: '737286190732',
	appId: '1:737286190732:web:a3e6180d7b40bcc82f2da9'
}
let app

if (!firebase.apps.length) {
	app = firebase.initializeApp(firebaseConfig)
} else {
	app = firebase.app()
}

export const auth = app.auth()
export const db = app.firestore()
export const realtime = app.database()
