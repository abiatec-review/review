import { startLoadingAction, stopLoadingAction } from "@actions/loading";
import { getLocationListAction } from "@actions/location";
import LoadingAction, { LoadingActionType } from "@models/actions/loading";
import GetLocationsAction, { LocationActionType } from "@models/actions/location";
import Location from "@models/location";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockStore = configureMockStore([thunk]);

const locations: Array<Location> = [
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

  test("set locations", () => {
    store.dispatch(getLocationListAction(locations));
    const actions = store.getActions();
    expect(actions[1]).toEqual<GetLocationsAction>({
      type: LocationActionType.GET_LOCATIONS,
      payload: { locations }
    });
  });

  test("stop loading", () => {
    store.dispatch(stopLoadingAction());
    const actions = store.getActions();
    expect(actions[2]).toEqual<LoadingAction>({ type: LoadingActionType.STOP });
  });
});
