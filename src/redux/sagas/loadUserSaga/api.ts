import { auth } from './../../../firebase';

export interface IPayloadArguments {
  loginField: string;
  passwordField: string;
}

export const signup = async (payload: IPayloadArguments) => {
  return await auth.createUserWithEmailAndPassword(payload.loginField, payload.passwordField)
}

export const login = async (payload: IPayloadArguments) => {
  return await auth.signInWithEmailAndPassword(payload.loginField, payload.passwordField)
}
export const logout = async () => {
  return await auth.signOut()
}