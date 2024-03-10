// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "chat-app-f7217.firebaseapp.com",
  projectId: "chat-app-f7217",
  storageBucket: "chat-app-f7217.appspot.com",
  messagingSenderId: "641374168822",
  appId: "1:641374168822:web:19161f45e4790768b4eed7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
