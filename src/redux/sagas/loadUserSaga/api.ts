import { auth } from './../../../firebase';

export interface IPayload {
  loginField: string;
  passwordField: string;
}

export const signup = async (payload: IPayload) => {
  return await auth.createUserWithEmailAndPassword(payload.loginField, payload.passwordField)
}

export const login = async (payload: IPayload) => {
  return await auth.signInWithEmailAndPassword(payload.loginField, payload.passwordField)
}
export const logout = async () => {
  return await auth.signOut()
}