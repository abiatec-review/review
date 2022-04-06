import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import {
  scrollCharactersAction,
  scrollEpisodesAction,
  scrollLocationsAction
} from "@redux/actions";
import { ScrollAction, ScrollActionType } from "@redux/models/actions";

const mockStore = configureMockStore([thunk]);

const offset = 13;

describe("Scroll reducer", () => {
  const store = mockStore();

  test("scroll characters", () => {
    store.dispatch(scrollCharactersAction(offset));
    const actions = store.getActions();
    expect(actions[0]).toEqual<ScrollAction>({
      type: ScrollActionType.SCROLL_CHARACTERS,
      payload: { data: offset }
    });
  });

  test("scroll locations", () => {
    store.dispatch(scrollLocationsAction(offset));
    const actions = store.getActions();
    expect(actions[1]).toEqual<ScrollAction>({
      type: ScrollActionType.SCROLL_LOCATIONS,
      payload: { data: offset }
    });
  });

  test("scroll episodes", () => {
    store.dispatch(scrollEpisodesAction(offset));
    const actions = store.getActions();
    expect(actions[2]).toEqual<ScrollAction>({
      type: ScrollActionType.SCROLL_EPISODES,
      payload: { data: offset }
    });
  });
});
