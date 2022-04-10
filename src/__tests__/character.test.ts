import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import {
  getCharactersFailedAction,
  getCharactersSuccessAction,
  getFilteredCharactersFailedAction,
  getFilteredCharactersSuccessAction,
  startLoadingAction,
  stopLoadingAction
} from "@redux/actions";
import {
  CharacterAction,
  CharacterActionType,
  LoadingAction,
  LoadingActionType
} from "@redux/models/actions";
import { Character } from "@redux/models/entities";

const mockStore = configureMockStore([thunk]);

const characters: Array<Character> = [
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
];

const error = "test error";

describe("Character reducer", () => {
  const store = mockStore();

  test("start loading", () => {
    store.dispatch(startLoadingAction());
    const actions = store.getActions();
    expect(actions[0]).toEqual<LoadingAction>({ type: LoadingActionType.START });
  });

  test("set character: success", () => {
    const page = 1;
    store.dispatch(getFilteredCharactersSuccessAction(characters, page));
    const actions = store.getActions();
    expect(actions[1]).toEqual<CharacterAction>({
      type: CharacterActionType.GET_FILTERED_CHARACTERS_SUCCESS,
      payload: { data: { characters, page } }
    });
  });

  test("set character: failure", () => {
    store.dispatch(getFilteredCharactersFailedAction(error));
    const actions = store.getActions();
    expect(actions[2]).toEqual<CharacterAction>({
      type: CharacterActionType.GET_FILTERED_CHARACTERS_FAILED,
      payload: { error }
    });
  });

  test("stop loading", () => {
    store.dispatch(stopLoadingAction());
    const actions = store.getActions();
    expect(actions[3]).toEqual<LoadingAction>({ type: LoadingActionType.STOP });
  });

  test("start loading", () => {
    store.dispatch(startLoadingAction());
    const actions = store.getActions();
    expect(actions[4]).toEqual<LoadingAction>({ type: LoadingActionType.START });
  });

  test("set character list: success", () => {
    store.dispatch(getCharactersSuccessAction(characters));
    const actions = store.getActions();
    expect(actions[5]).toEqual<CharacterAction>({
      type: CharacterActionType.GET_CHARACTERS_SUCCESS,
      payload: { data: characters }
    });
  });

  test("set character list: failure", () => {
    store.dispatch(getCharactersFailedAction(error));
    const actions = store.getActions();
    expect(actions[6]).toEqual<CharacterAction>({
      type: CharacterActionType.GET_CHARACTERS_FAILED,
      payload: { error }
    });
  });

  test("stop loading", () => {
    store.dispatch(stopLoadingAction());
    const actions = store.getActions();
    expect(actions[7]).toEqual<LoadingAction>({ type: LoadingActionType.STOP });
  });
});
