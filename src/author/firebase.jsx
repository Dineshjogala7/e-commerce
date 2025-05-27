// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnrKefcAGqT9iy836w5edjK3eJv",
  authDomain: "e-commerce-26138.firebaseapp.com",
  projectId: "e-commerce-26138",
  storageBucket: "e-commerce-26138.firebasestorage.app",
  messagingSenderId: "446242841902",
  appId: "1:446242841902:web:f38256fd1ae6fa791e06bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);
export default app;
