import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { getUserAction } from "@redux/actions";
import { UserAction, UserActionType } from "@redux/models/actions";

const mockStore = configureMockStore([thunk]);

describe("User reducer", () => {
  const store = mockStore();

  test("set user", () => {
    store.dispatch(getUserAction(null));
    const actions = store.getActions();
    expect(actions[0]).toEqual<UserAction>({
      type: UserActionType.SET_USER,
      payload: { data: null }
    });
  });
});
