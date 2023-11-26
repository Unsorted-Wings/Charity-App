// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAgZ3N1aL5M72sk6O-hFHwNihfdyq7-LGo",
  authDomain: "charity-406220.firebaseapp.com",
  projectId: "charity-406220",
  storageBucket: "charity-406220.appspot.com",
  messagingSenderId: "683629199093",
  appId: "1:683629199093:web:e7a3bbaf160712e7184fbc",
  measurementId: "G-SNVGYFVFL4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
