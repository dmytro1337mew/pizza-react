// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTHMe-uaWphfNC2varXczQrhQBn7TdW7U",
  authDomain: "pizzareact-86fec.firebaseapp.com",
  projectId: "pizzareact-86fec",
  storageBucket: "pizzareact-86fec.appspot.com",
  messagingSenderId: "402860798149",
  appId: "1:402860798149:web:857cccbad02dd39d9e40ac",
  measurementId: "G-V5PQTL87WD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
