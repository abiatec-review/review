// Import the functions you need from the SDKs you need


import { auth } from "./../firebase";
import React, { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { LOAD_USER_REQUEST } from "redux/actions/UserActions";

//@ts-ignore
export const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export const AuthProvider = ({children}: any) => {
  const dispatch = useDispatch()

   useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      dispatch({type: LOAD_USER_REQUEST, payload: user})
    })

    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  )
}

