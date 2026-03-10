// DO NOT SHARE FIREBASE CONFIGURATION TO ONLINE REPOSITORIES

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm3HYJi0g1G_mQMen0P3K2aRxMBVaHRag",
  authDomain: "simple-firebase-auth2-b3f2f.firebaseapp.com",
  projectId: "simple-firebase-auth2-b3f2f",
  storageBucket: "simple-firebase-auth2-b3f2f.firebasestorage.app",
  messagingSenderId: "999983246406",
  appId: "1:999983246406:web:b1424594a9f4aeaf5f6e47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const auth = getAuth(app);