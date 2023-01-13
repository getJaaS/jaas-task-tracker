// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6nFmOYhxw2iulcCvbxQZqxxaiT0T2n1o",
  authDomain: "jaas-task-tracker.firebaseapp.com",
  projectId: "jaas-task-tracker",
  storageBucket: "jaas-task-tracker.appspot.com",
  messagingSenderId: "648745748510",
  appId: "1:648745748510:web:5a9c7be3c87260053b460f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);