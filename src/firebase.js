import * as firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCX-jlYFGerS8ADRXq2o7eWG7VhkFDNFCs",
  authDomain: "diary-d2138.firebaseapp.com",
  databaseURL: "https://diary-d2138.firebaseio.com",
  projectId: "diary-d2138",
  storageBucket: "",
  messagingSenderId: "457432381331"
};
firebase.initializeApp(config);

export const database = firebase.database().ref('/notes')

export const auth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const twitterProvider = new firebase.auth.TwitterAuthProvider()