import { FirebaseAuthTypes } from "@react-native-firebase/auth";

export interface UserReducer {
  user: FirebaseAuthTypes.User | null;
}
