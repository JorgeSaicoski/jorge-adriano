// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6AgqxoQH2HRPeTijk-mIDIG84yKWCQaE",
  authDomain: "jorgeadriano-52d37.firebaseapp.com",
  projectId: "jorgeadriano-52d37",
  storageBucket: "jorgeadriano-52d37.appspot.com",
  messagingSenderId: "724445340469",
  appId: "1:724445340469:web:5fe30464db7819c872227c",
  measurementId: "G-GFBVFGWEP5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
