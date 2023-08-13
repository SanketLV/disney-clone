// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARMJ5wGcwb-3z98QjcpGrrCCAJuG5tbXA",
  authDomain: "disneyplus-clone-ac1b4.firebaseapp.com",
  projectId: "disneyplus-clone-ac1b4",
  storageBucket: "disneyplus-clone-ac1b4.appspot.com",
  messagingSenderId: "671040588103",
  appId: "1:671040588103:web:eb5e77a4bbdbb3c91fe462",
  measurementId: "G-6EL3F3M48W",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
