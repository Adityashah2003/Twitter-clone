// Import the functions you need from the SDKs you need
import { initializeApp , getApp , getApps} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "twitter-7a021.firebaseapp.com",
  projectId: "twitter-7a021",
  storageBucket: "twitter-7a021.appspot.com",
  messagingSenderId: "125715067655",
  appId: "1:125715067655:web:9eeb1d19cefdaab864cba2"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();   //if app is not initialized then initialize it

const db = getFirestore();
const storage = getStorage();
export {app,db,storage};