import { getEpisodeListAction } from "@actions/episode";
import { startLoadingAction, stopLoadingAction } from "@actions/loading";
import GetEpisodesAction, { EpisodeActionType } from "@models/actions/episode";
import LoadingAction, { LoadingActionType } from "@models/actions/loading";
import Episode from "@models/episode";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockStore = configureMockStore([thunk]);

const episodes: Array<Episode> = [
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

  test("set episodes", () => {
    store.dispatch(getEpisodeListAction(episodes));
    const actions = store.getActions();
    expect(actions[1]).toEqual<GetEpisodesAction>({
      type: EpisodeActionType.GET_EPISODES,
      payload: { episodes }
    });
  });

  test("stop loading", () => {
    store.dispatch(stopLoadingAction());
    const actions = store.getActions();
    expect(actions[2]).toEqual<LoadingAction>({ type: LoadingActionType.STOP });
  });
});
