// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDy7ggFctMQxROErrCHNRdMIo7zkFCYGzM",
  authDomain: "netflix-37359.firebaseapp.com",
  projectId: "netflix-37359",
  storageBucket: "netflix-37359.appspot.com",
  messagingSenderId: "4548350035",
  appId: "1:4548350035:web:f57f892f4a222dd9a3f6a6",
  measurementId: "G-7ERTZ7QNH5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
