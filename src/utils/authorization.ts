import { firebase } from "@react-native-firebase/auth";

export function signIn(email: string, password: string) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

export async function signUp(userName: string, email: string, password: string) {
  const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
  user.updateProfile({ displayName: userName });
}
