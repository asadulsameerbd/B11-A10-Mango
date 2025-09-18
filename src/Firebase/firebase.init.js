// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWmWM3tA8CsshtNscC2u_dg5U4b0S7E7o",
  authDomain: "b11-a10-76609.firebaseapp.com",
  projectId: "b11-a10-76609",
  storageBucket: "b11-a10-76609.firebasestorage.app",
  messagingSenderId: "168470494005",
  appId: "1:168470494005:web:718a3c58ed1b6a5727aa7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)