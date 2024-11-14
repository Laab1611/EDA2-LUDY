import {getAuth} from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxk0hAbBviup7z9Q1zNvHO_n2BcojW7RY",
  authDomain: "challenge-20-7e5c0.firebaseapp.com",
  projectId: "challenge-20-7e5c0",
  storageBucket: "challenge-20-7e5c0.firebasestorage.app",
  messagingSenderId: "261207673015",
  appId: "1:261207673015:web:9b4d617ce4d27f067be532",
  measurementId: "G-0DYYR4BSRS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);

export {app, auth, db};