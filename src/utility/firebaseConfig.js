// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-7AUwzhX00OPhT4H82K39svlLksmxxTU",
  authDomain: "shopopedia-8ab21.firebaseapp.com",
  projectId: "shopopedia-8ab21",
  storageBucket: "shopopedia-8ab21.firebasestorage.app",
  messagingSenderId: "537300178899",
  appId: "1:537300178899:web:3996d634360c5ea8568126"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { app as firebaseApp, db, auth };