import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut,} from "firebase/auth";

import {initializeApp} from "firebase/app";
import {firebaseConfig} from "../index";

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const authService = {
    logInWithEmailAndPassword: async (email: string, password: string) => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            return response.user
        } catch (err) {
            console.error(err);
        }
    },
    registerWithEmailAndPassword: async (email: string, password: string) => {
        try {
            return await createUserWithEmailAndPassword(auth, email, password)
        } catch (err) {
            console.error(err);
        }
    },
    logout: () => signOut(auth)
}