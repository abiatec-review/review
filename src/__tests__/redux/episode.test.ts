import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { getEpisodeListFailedAction, getEpisodeListSuccessAction } from "@redux/actions";
import { EpisodeAction, EpisodeActionType } from "@redux/models/actions";
import { Episode, PagedData } from "@redux/models/entities";

const mockStore = configureMockStore([thunk]);

const data: PagedData<Episode> = {
  nextPage: 1,
  hasMore: true,
  items: [
    {
      id: 1,
      name: "test",
      air_date: "test",
      characters: ["test"],
      episode: "test",
      url: "test",
      created: "test"
    }
  ]
};

describe("Episode reducer", () => {
  const store = mockStore();

  test("set episodes: success", () => {
    store.dispatch(getEpisodeListSuccessAction(data));
    const actions = store.getActions();
    expect(actions[0]).toEqual<EpisodeAction>({
      type: EpisodeActionType.GET_EPISODE_LIST_SUCCESS,
      payload: { data }
    });
  });

  test("set episodes: failure", () => {
    const error = "test error";
    store.dispatch(getEpisodeListFailedAction(error));
    const actions = store.getActions();
    expect(actions[1]).toEqual<EpisodeAction>({
      type: EpisodeActionType.GET_EPISODE_LIST_FAILED,
      payload: { error }
    });
  });
});
