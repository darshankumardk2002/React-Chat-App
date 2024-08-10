// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtB6ZLJ2FCCeCJXRqCJv3AUUtKViJx6i0",
  authDomain: "chatapp-343d0.firebaseapp.com",
  projectId: "chatapp-343d0",
  storageBucket: "chatapp-343d0.appspot.com",
  messagingSenderId: "889457695986",
  appId: "1:889457695986:web:ec1c45ac2f1cdb829c046b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
