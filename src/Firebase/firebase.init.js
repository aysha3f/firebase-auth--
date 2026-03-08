// DO NOT SHARE FIREBASE CONFIGURATION TO ONLINE REPOSITORIES

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiBt7txp5CJ8HuayCatijHWoNEVjvB0MA",
  authDomain: "fir-auth-46fe6.firebaseapp.com",
  projectId: "fir-auth-46fe6",
  storageBucket: "fir-auth-46fe6.firebasestorage.app",
  messagingSenderId: "381853244144",
  appId: "1:381853244144:web:439dac31182d885096c035"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);