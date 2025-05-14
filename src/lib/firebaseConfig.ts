import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC8W8esXWqX9t-ZbJBjcm7QEi0qwSEMtw0",
  authDomain: "societyhub-live.firebaseapp.com",
  projectId: "societyhub-live",
  storageBucket: "societyhub-live.firebasestorage.app",
  messagingSenderId: "340691587433",
  appId: "1:340691587433:web:2e0ca0a9aefe4bc1dbadf8", 
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);