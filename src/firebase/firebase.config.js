// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1RenMFFUz4FlI0kjouV8rc7BZv5VUHqw",
  authDomain: "birthday-manager-auth.firebaseapp.com",
  projectId: "birthday-manager-auth",
  storageBucket: "birthday-manager-auth.appspot.com",
  messagingSenderId: "713620611434",
  appId: "1:713620611434:web:cd9e916bab4cd3ad0fc513"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;