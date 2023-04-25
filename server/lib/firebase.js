// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMG0lJLsSUDyPMgib2gzxLzfxEO7mn0cQ",
  authDomain: "nuxt-crud-59376.firebaseapp.com",
  databaseURL: "https://nuxt-crud-59376-default-rtdb.firebaseio.com",
  projectId: "nuxt-crud-59376",
  storageBucket: "nuxt-crud-59376.appspot.com",
  messagingSenderId: "464228125179",
  appId: "1:464228125179:web:12c0c7380a56664078235e"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const firestoreDb = getFirestore(firebaseApp);