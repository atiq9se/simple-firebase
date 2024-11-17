// Do not config to th client side

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYsWrFji2iN4qb8p6W3-ErWih-CyLxGJw",
  authDomain: "simple-firebase-11d3b.firebaseapp.com",
  projectId: "simple-firebase-11d3b",
  storageBucket: "simple-firebase-11d3b.firebasestorage.app",
  messagingSenderId: "569148302379",
  appId: "1:569148302379:web:00693a137ea9f09342766e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

