import * as ScrollAction from "@actions/scroll";
import * as ActionTypes from "@models/actions/scroll";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockStore = configureMockStore([thunk]);

const offset = 13;

describe("Scroll reducer", () => {
  const store = mockStore();

  test("scroll characters", () => {
    store.dispatch(ScrollAction.scrollCharactersAction(offset));
    const actions = store.getActions();
    expect(actions[0]).toEqual<ActionTypes.CharacterScrollAction>({
      type: ActionTypes.ScrollActionType.SCROLL_CHARACTERS,
      payload: { offset }
    });
  });

  test("scroll locations", () => {
    store.dispatch(ScrollAction.scrollLocationsAction(offset));
    const actions = store.getActions();
    expect(actions[1]).toEqual<ActionTypes.LocationScrollAction>({
      type: ActionTypes.ScrollActionType.SCROLL_LOCATIONS,
      payload: { offset }
    });
  });

  test("scroll episodes", () => {
    store.dispatch(ScrollAction.scrollEpisodesAction(offset));
    const actions = store.getActions();
    expect(actions[2]).toEqual<ActionTypes.EpisodeScrollAction>({
      type: ActionTypes.ScrollActionType.SCROLL_EPISODES,
      payload: { offset }
    });
  });
});
