import {
  getLocationListFailedAction,
  getLocationListSuccessAction,
  startLoadingAction,
  stopLoadingAction
} from "@actions";
import {
  LoadingAction,
  LoadingActionType,
  LocationAction,
  LocationActionType
} from "@models/actions";
import { Location } from "@models/entities";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockStore = configureMockStore([thunk]);

const data: Array<Location> = [
  {
    id: 1,
    name: "test",
    type: "test",
    dimension: "test",
    residents: ["test"],
    url: "test",
    created: "test"
  }
];

describe("Location reducer", () => {
  const store = mockStore();

  test("start loading", () => {
    store.dispatch(startLoadingAction());
    const actions = store.getActions();
    expect(actions[0]).toEqual<LoadingAction>({ type: LoadingActionType.START });
  });

  test("set locations: success", () => {
    store.dispatch(getLocationListSuccessAction(data));
    const actions = store.getActions();
    expect(actions[1]).toEqual<LocationAction>({
      type: LocationActionType.GET_LOCATION_LIST_SUCCESS,
      payload: { data }
    });
  });

  test("set locations: failure", () => {
    const error = "test error";
    store.dispatch(getLocationListFailedAction(error));
    const actions = store.getActions();
    expect(actions[2]).toEqual<LocationAction>({
      type: LocationActionType.GET_LOCATION_LIST_FAILED,
      payload: { error }
    });
  });

  test("stop loading", () => {
    store.dispatch(stopLoadingAction());
    const actions = store.getActions();
    expect(actions[3]).toEqual<LoadingAction>({ type: LoadingActionType.STOP });
  });
});
