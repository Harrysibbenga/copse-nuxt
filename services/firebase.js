/* eslint-disable no-unused-vars */
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/analytics'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAh7XiyfqTw7ihxy4w0pHFTPIz5SZzoyag',
  databaseURL: 'https://copse-auto.firebaseio.com',
  authDomain: 'copse-auto.firebaseapp.com',
  projectId: 'copse-auto',
  storageBucket: 'copse-auto.appspot.com',
  messagingSenderId: '917149721133',
  appId: '1:917149721133:web:7f676ed9120361a3744ea4',
}

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
  firebase.analytics()
}

const db = firebase.firestore()

export const auth = firebase.auth()
export const storage = firebase.storage()
export const imgCol = db.collection('images')
export const serviceImgs = db.collection('service_images')
export const postsCol = db.collection('posts')
export const aboutCol = db.collection('about')
export default firebase
