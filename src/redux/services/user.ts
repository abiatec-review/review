import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { Dispatch } from "redux";

import { getUserAction } from "@redux/actions";
import { UserAction } from "@redux/models/actions";

export function setUser(user: FirebaseAuthTypes.User | null) {
  return function (dispatch: Dispatch<UserAction>) {
    dispatch(getUserAction(user));
  };
}
