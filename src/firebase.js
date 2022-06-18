import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrN8bqMUB9pB7oq9TChXJlPeUUY5Wj9BQ",
  authDomain: "clone-586f5.firebaseapp.com",
  projectId: "clone-586f5",
  storageBucket: "clone-586f5.appspot.com",
  messagingSenderId: "683095694385",
  appId: "1:683095694385:web:ec57979f6ca579b6654910",
  measurementId: "G-CWD0M7024G",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
