// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCudgRBP4HQ7Si-LLkM-NBsiNF5PtAY4hI",
  authDomain: "temple-51d57.firebaseapp.com",
  projectId: "temple-51d57",
  storageBucket: "temple-51d57.appspot.com",
  messagingSenderId: "358799081696",
  appId: "1:358799081696:web:51c211f7c782a7fab01085"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()