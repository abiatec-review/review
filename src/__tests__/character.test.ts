import { getCharacterAction, getCharactersListAction } from "@actions/character";
import { startLoadingAction, stopLoadingAction } from "@actions/loading";
import CharacterAction, { CharacterActionType } from "@models/actions/character";
import LoadingAction, { LoadingActionType } from "@models/actions/loading";
import Character from "@models/entities/character";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

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

describe("Character reducer", () => {
  const store = mockStore();

  test("start loading", () => {
    store.dispatch(startLoadingAction());
    const actions = store.getActions();
    expect(actions[0]).toEqual<LoadingAction>({ type: LoadingActionType.START });
  });

  test("set character", () => {
    store.dispatch(getCharacterAction(character));
    const actions = store.getActions();
    expect(actions[1]).toEqual<CharacterAction>({
      type: CharacterActionType.GET_CHARACTER_SUCCESS,
      payload: { character }
    });
  });

  test("stop loading", () => {
    store.dispatch(stopLoadingAction());
    const actions = store.getActions();
    expect(actions[2]).toEqual<LoadingAction>({ type: LoadingActionType.STOP });
  });

  test("start loading", () => {
    store.dispatch(startLoadingAction());
    const actions = store.getActions();
    expect(actions[3]).toEqual<LoadingAction>({ type: LoadingActionType.START });
  });

  test("set character", () => {
    const characters = [character];
    store.dispatch(getCharactersListAction(characters));
    const actions = store.getActions();
    expect(actions[4]).toEqual<CharacterAction>({
      type: CharacterActionType.GET_CHARACTER_LIST_SUCCESS,
      payload: { characters }
    });
  });

  test("stop loading", () => {
    store.dispatch(stopLoadingAction());
    const actions = store.getActions();
    expect(actions[5]).toEqual<LoadingAction>({ type: LoadingActionType.STOP });
  });
});
