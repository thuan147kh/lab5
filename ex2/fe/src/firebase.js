import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/storage'
import 'firebase/compat/database'
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCCGyyeF3hMNpFwabrClbVs6-nKMjV1uWs",
  authDomain: "week5-e77e4.firebaseapp.com",
  projectId: "week5-e77e4",
  storageBucket: "week5-e77e4.appspot.com",
  messagingSenderId: "1070741321842",
  appId: "1:1070741321842:web:6e604077ad4c88b2e4eaeb",
  measurementId: "G-G8ZM6C5T62"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db