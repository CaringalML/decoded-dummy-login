import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAueV1cxJfKznEc4yx1zjUySnGyHp8BHN8",
  authDomain: "decoded-dummy-login.firebaseapp.com",
  projectId: "decoded-dummy-login",
  storageBucket: "decoded-dummy-login.firebasestorage.app",
  messagingSenderId: "999500767823",
  appId: "1:999500767823:web:34d82ab6b7c9df9ca4403a",
  measurementId: "G-GL4HSH8YY7",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
