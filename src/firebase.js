import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDvWrV8p5cm5W6mL0m9GFPTA2N3d0yVrt8",
    authDomain: "boletim-68c17.firebaseapp.com",
    databaseURL: "https://boletim-68c17-default-rtdb.firebaseio.com",
    projectId: "boletim-68c17",
    storageBucket: "boletim-68c17.appspot.com",
    messagingSenderId: "260092741979",
    appId: "1:260092741979:web:1b6bc9195bda66ab8d727e"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }