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
let app = null
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig)
}

const db = firebase.firestore()

export const auth = firebase.auth()
export const storage = firebase.storage()
export const imgCol = db.collection('images')
export const circuitImgCol = db.collection('circuit_images')
export const partnerImgCol = db.collection('partner_images')
export const postsCol = db.collection('posts')
export const headlineCol = db.collection('headline')
export const circuitCol = db.collection('circuits')
export const aboutCol = db.collection('about')
export const partnerCol = db.collection('partners')
export const calendarCol = db.collection('calendar')
export const testCol = db.collection('test')
export default firebase
