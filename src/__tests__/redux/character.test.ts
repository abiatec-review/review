import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import {
  getCharactersFailedAction,
  getCharactersSuccessAction,
  getFilteredCharactersFailedAction,
  getFilteredCharactersSuccessAction
} from "@redux/actions";
import { CharacterAction, CharacterActionType } from "@redux/models/actions";
import { Character, PagedData } from "@redux/models/entities";

const mockStore = configureMockStore([thunk]);

const data: PagedData<Character> = {
  nextPage: 1,
  hasMore: true,
  items: [
    {
      id: 1,
      name: "test",
      type: "test",
      gender: "test",
      status: "test",
      species: "test",
      origin: {
        name: "test",
        url: "test"
      },
      location: {
        name: "test",
        url: "test"
      },
      image: "test",
      episode: ["test"],
      url: "test",
      created: "test"
    }
  ]
};

const error = "test error";

describe("Character reducer", () => {
  const store = mockStore();

  test("set character: success", () => {
    store.dispatch(getFilteredCharactersSuccessAction(data));
    const actions = store.getActions();
    expect(actions[0]).toEqual<CharacterAction>({
      type: CharacterActionType.GET_FILTERED_CHARACTERS_SUCCESS,
      payload: { data }
    });
  });

  test("set character: failure", () => {
    store.dispatch(getFilteredCharactersFailedAction(error));
    const actions = store.getActions();
    expect(actions[1]).toEqual<CharacterAction>({
      type: CharacterActionType.GET_FILTERED_CHARACTERS_FAILED,
      payload: { error }
    });
  });

  test("set character list: success", () => {
    store.dispatch(getCharactersSuccessAction(data));
    const actions = store.getActions();
    expect(actions[2]).toEqual<CharacterAction>({
      type: CharacterActionType.GET_CHARACTERS_SUCCESS,
      payload: { data }
    });
  });

  test("set character list: failure", () => {
    store.dispatch(getCharactersFailedAction(error));
    const actions = store.getActions();
    expect(actions[3]).toEqual<CharacterAction>({
      type: CharacterActionType.GET_CHARACTERS_FAILED,
      payload: { error }
    });
  });
});
