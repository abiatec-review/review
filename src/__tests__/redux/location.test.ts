import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { getLocationListFailedAction, getLocationListSuccessAction } from "@redux/actions";
import { LocationAction, LocationActionType } from "@redux/models/actions";
import { Location, PagedData } from "@redux/models/entities";

const mockStore = configureMockStore([thunk]);

const data: PagedData<Location> = {
  nextPage: 1,
  hasMore: true,
  items: [
    {
      id: 1,
      name: "test",
      type: "test",
      dimension: "test",
      residents: ["test"],
      url: "test",
      created: "test"
    }
  ]
};

describe("Location reducer", () => {
  const store = mockStore();

  test("set locations: success", () => {
    store.dispatch(getLocationListSuccessAction(data));
    const actions = store.getActions();
    expect(actions[0]).toEqual<LocationAction>({
      type: LocationActionType.GET_LOCATION_LIST_SUCCESS,
      payload: { data }
    });
  });

  test("set locations: failure", () => {
    const error = "test error";
    store.dispatch(getLocationListFailedAction(error));
    const actions = store.getActions();
    expect(actions[1]).toEqual<LocationAction>({
      type: LocationActionType.GET_LOCATION_LIST_FAILED,
      payload: { error }
    });
  });
});
