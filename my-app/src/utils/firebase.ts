import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyC4hvvg0cDigU75AKHspm1rl5bOnSSnQ6U",
  authDomain: "rick-n-morty-e6cfb.firebaseapp.com",
  projectId: "rick-n-morty-e6cfb",
  storageBucket: "rick-n-morty-e6cfb.appspot.com",
  messagingSenderId: "833180877447",
  appId: "1:833180877447:web:d60ace47b2e6c0c3b56e22",
  measurementId: "G-KPJLBCZVGR"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const logInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response.user
  } catch (err: any) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (email: any, password: any) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    return response
  } catch (err: any) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => signOut(auth);


export {
  auth,
  registerWithEmailAndPassword,
  logInWithEmailAndPassword,
  logout,
};