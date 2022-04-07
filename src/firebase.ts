import {initializeApp} from "firebase/app"
import "firebase/auth"

const app = initializeApp({
  apiKey: "AIzaSyCdSXT2mUmjMeGoiYPuHBE4j9ynjfptlbk",
  authDomain: "rick-ff55d.firebaseapp.com",
  projectId: "rick-ff55d",
  storageBucket: "rick-ff55d.appspot.com",
  messagingSenderId: "275189104660",
  appId: "1:275189104660:web:d2afb9ba8a872793b1e701"
});
//@ts-ignore
export const auth = app.auth()
export default app