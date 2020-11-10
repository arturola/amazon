import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBkrtj_TDglgHTlPuMJeLHGHYmZeGvDz5A",
  authDomain: "arturolatorre--clone.firebaseapp.com",
  databaseURL: "https://arturolatorre--clone.firebaseio.com",
  projectId: "arturolatorre--clone",
  storageBucket: "arturolatorre--clone.appspot.com",
  messagingSenderId: "1016357703354",
  appId: "1:1016357703354:web:2c95ab0c162e35c41d7c83",
  measurementId: "G-5WH7KC9NDP",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
