import {
  getEpisodeListFailedAction,
  getEpisodeListSuccessAction,
  startLoadingAction,
  stopLoadingAction
} from "@actions";
import {
  EpisodeAction,
  EpisodeActionType,
  LoadingAction,
  LoadingActionType
} from "@models/actions";
import { Episode } from "@models/entities";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockStore = configureMockStore([thunk]);

const data: Array<Episode> = [
  {
    id: 1,
    name: "test",
    air_date: "test",
    characters: ["test"],
    episode: "test",
    url: "test",
    created: "test"
  }
];

describe("Episode reducer", () => {
  const store = mockStore();

  test("start loading", () => {
    store.dispatch(startLoadingAction());
    const actions = store.getActions();
    expect(actions[0]).toEqual<LoadingAction>({ type: LoadingActionType.START });
  });

  test("set episodes: success", () => {
    store.dispatch(getEpisodeListSuccessAction(data));
    const actions = store.getActions();
    expect(actions[1]).toEqual<EpisodeAction>({
      type: EpisodeActionType.GET_EPISODE_LIST_SUCCESS,
      payload: { data }
    });
  });

  test("set episodes: failure", () => {
    const error = "test error";
    store.dispatch(getEpisodeListFailedAction(error));
    const actions = store.getActions();
    expect(actions[2]).toEqual<EpisodeAction>({
      type: EpisodeActionType.GET_EPISODE_LIST_FAILED,
      payload: { error }
    });
  });

  test("stop loading", () => {
    store.dispatch(stopLoadingAction());
    const actions = store.getActions();
    expect(actions[3]).toEqual<LoadingAction>({ type: LoadingActionType.STOP });
  });
});
