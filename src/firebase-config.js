import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBupeEN8zsB5u99c2_kHaSrxZqZWCD9-Tw",
  authDomain: "mybase-62710.firebaseapp.com",
  projectId: "mybase-62710",
  storageBucket: "mybase-62710.appspot.com",
  messagingSenderId: "380583271091",
  appId: "1:380583271091:web:7b62b74884f4fee7762ec6",
  measurementId: "G-CVG1SJMXKM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Authentication
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);