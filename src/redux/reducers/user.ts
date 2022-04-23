import { UserAction, UserActionType } from "@redux/models/actions";
import { UserReducer } from "@redux/models/reducers";

const initialState: UserReducer = {
  user: null
};

export function userReducer(state = initialState, action: UserAction): UserReducer {
  const { type, payload } = action;

  switch (type) {
    case UserActionType.SET_USER:
      return { user: payload.data };
    default:
      return state;
  }
}
