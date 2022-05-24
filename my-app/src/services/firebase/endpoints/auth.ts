import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut,} from "firebase/auth";

import {initializeApp} from "firebase/app";
import {firebaseConfig} from "../index";

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const authService = {
    logInWithEmailAndPassword: async (email: string, password: string) => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            return response.user
        } catch (err: any) {
            console.error(err);
            alert(err.message);
        }
    },
    registerWithEmailAndPassword: async (email: any, password: any) => {
        try {
            return await createUserWithEmailAndPassword(auth, email, password)
        } catch (err: any) {
            console.error(err);
            alert(err.message);
        }
    },
    logout: () => signOut(auth)
}