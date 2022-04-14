import { FirebaseAuthTypes } from "@react-native-firebase/auth";

import { SuccessAction } from "./action";

export const enum UserActionType {
  SET_USER = "SET_USER"
}

type SetUserAction = SuccessAction<UserActionType.SET_USER, FirebaseAuthTypes.User | null>;

export type UserAction = SetUserAction;
