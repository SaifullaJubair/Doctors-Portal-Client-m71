// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyAvWoB03WJNZw8-yustVBhvy3h-J8MGOIU",
   authDomain: "doctor-m71.firebaseapp.com",
   projectId: "doctor-m71",
   storageBucket: "doctor-m71.appspot.com",
   messagingSenderId: "917985155798",
   appId: "1:917985155798:web:4f9621dd79c27485230777"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app