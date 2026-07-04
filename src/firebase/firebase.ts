import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "taskdev-846bb.firebaseapp.com",
  projectId: "taskdev-846bb",
  storageBucket: "taskdev-846bb.firebasestorage.app",
  messagingSenderId: "529655887736",
  appId: "1:529655887736:web:0408b2dcb3e39d17e03a8d",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

// Provider de autenticação com Google
export const googleProvider = new GoogleAuthProvider();