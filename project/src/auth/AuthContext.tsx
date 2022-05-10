import React, {
  FC, useContext, useEffect, useState,
} from 'react';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth';

import { auth } from './firebaseAuth';

interface ContextValue {
  currentUser: User,
  signUp: (email: string, password: string) => any,
  signIn: (email: string, password: string) => any,
  logOut: () => any,
}

const AuthContext = React.createContext<ContextValue | null | undefined>(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>();

  const signUp = async (email: string, password: string) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      return res;
    } catch (err: any) {
      return {
        error: err.code,
      };
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      return res;
    } catch (err: any) {
      return {
        error: err.code,
      };
    }
  };

  const logOut = async () => {
    try {
      const res = await signOut(auth);
      return res;
    } catch (err: any) {
      return {
        error: err.code,
      };
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => setCurrentUser(user));
    return unsubscribe;
  });

  const value = {
    currentUser,
    signUp,
    signIn,
    logOut,
  };

  return (
  // @ts-ignore: Unreachable code error
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
