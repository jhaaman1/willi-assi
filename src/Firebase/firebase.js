import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyA0uLLn1OEGm-W-StsIujCsTYj0AxQ96ek",
  authDomain: "fir-auth-a705e.firebaseapp.com",
  projectId: "fir-auth-a705e",
  storageBucket: "fir-auth-a705e.appspot.com",
  messagingSenderId: "365986258347",
  appId: "1:365986258347:web:762e0bdc933c852c6e06ee",
  measurementId: "G-3LR5H9QJDP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth()

export {app, auth}