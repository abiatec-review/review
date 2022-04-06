import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import {
  getCharacterFailedAction,
  getCharacterListFailedAction,
  getCharacterListSuccessAction,
  getCharacterSuccessAction,
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

const character: Character = {
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
};

const error = "test error";

describe("Character reducer", () => {
  const store = mockStore();

  test("start loading", () => {
    store.dispatch(startLoadingAction());
    const actions = store.getActions();
    expect(actions[0]).toEqual<LoadingAction>({ type: LoadingActionType.START });
  });

  test("set character: success", () => {
    store.dispatch(getCharacterSuccessAction(character));
    const actions = store.getActions();
    expect(actions[1]).toEqual<CharacterAction>({
      type: CharacterActionType.GET_CHARACTER_SUCCESS,
      payload: { data: character }
    });
  });

  test("set character: failure", () => {
    store.dispatch(getCharacterFailedAction(error));
    const actions = store.getActions();
    expect(actions[2]).toEqual<CharacterAction>({
      type: CharacterActionType.GET_CHARACTER_FAILED,
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
    const characters = [character];
    store.dispatch(getCharacterListSuccessAction(characters));
    const actions = store.getActions();
    expect(actions[5]).toEqual<CharacterAction>({
      type: CharacterActionType.GET_CHARACTER_LIST_SUCCESS,
      payload: { data: characters }
    });
  });

  test("set character list: failure", () => {
    store.dispatch(getCharacterListFailedAction(error));
    const actions = store.getActions();
    expect(actions[6]).toEqual<CharacterAction>({
      type: CharacterActionType.GET_CHARACTER_LIST_FAILED,
      payload: { error }
    });
  });

  test("stop loading", () => {
    store.dispatch(stopLoadingAction());
    const actions = store.getActions();
    expect(actions[7]).toEqual<LoadingAction>({ type: LoadingActionType.STOP });
  });
});
