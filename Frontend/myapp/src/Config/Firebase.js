import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2Fq_EamuY3GCRb3XgGfAmp7y2mvCzekk",
  authDomain: "e-commerce-780ea.firebaseapp.com",
  projectId: "e-commerce-780ea",
  storageBucket: "e-commerce-780ea.appspot.com",
  messagingSenderId: "451988969886",
  appId: "1:451988969886:web:7f5487a323f5fa81b6de8f",
  measurementId: "G-PNCW4J1N0W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const googleProvider=new GoogleAuthProvider();