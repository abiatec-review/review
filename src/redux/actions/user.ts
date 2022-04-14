import { FirebaseAuthTypes } from "@react-native-firebase/auth";

import { UserAction, UserActionType } from "@redux/models/actions";

export function getUserAction(data: FirebaseAuthTypes.User | null): UserAction {
  return {
    type: UserActionType.SET_USER,
    payload: { data }
  };
}
