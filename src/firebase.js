import firebaseApp from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyA6USfkE3dw5xEQENab1gtpm1WRix8xRKg',
  authDomain: 'pokemon-apocalypse-webapp.firebaseapp.com',
  databaseURL: 'https://pokemon-apocalypse-webapp.firebaseio.com',
  projectId: 'pokemon-apocalypse-webapp',
  storageBucket: '',
  messagingSenderId: '1046131476401',
  appId: '1:1046131476401:web:d30b968c0af7b516'
}
// Initialize Firebase
firebaseApp.initializeApp(firebaseConfig)

export const db = firebaseApp.firestore()
export const firebase = firebaseApp
