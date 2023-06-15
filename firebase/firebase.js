// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYMctgQQe7u4e91gN0LaNOFA6JmcUvqX4",
  authDomain: "fir-todo-app-b42e1.firebaseapp.com",
  projectId: "fir-todo-app-b42e1",
  storageBucket: "fir-todo-app-b42e1.appspot.com",
  messagingSenderId: "1098664619693",
  appId: "1:1098664619693:web:cfff4a9ee9603bba25a024"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)  //for auth service
export const db=getFirestore(app)  //for database

