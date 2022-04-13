import { firebase, FirebaseAuthTypes } from "@react-native-firebase/auth";

export function signIn(email: string, password: string) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

export async function signUp(userName: string, email: string, password: string) {
  const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
  await user.updateProfile({ displayName: userName });
}

export function signOut() {
  return firebase.auth().signOut();
}

export function onAuthStateChanged(listener: FirebaseAuthTypes.AuthListenerCallback) {
  return firebase.auth().onAuthStateChanged(listener);
}

export function getUser() {
  return firebase.auth().currentUser;
}

export function updateUser(user: FirebaseAuthTypes.UpdateProfile) {
  return firebase.auth().currentUser?.updateProfile(user);
}
