import {
  getCharacterAction,
  getCharactersListAction,
  startLoadingAction,
  stopLoadingAction
} from "@actions";
import { CharacterAction } from "@models/actions";
import { Character, Pagination, ResultList } from "@models/entities";
import { Dispatch } from "redux";

import requests, { fixDate } from "./base";

export function getCharacter(id: number) {
  return async function (dispatch: Dispatch<CharacterAction>) {
    dispatch(startLoadingAction());

    const result = await requests.get<Character>(`/character/${id}`);

    const character = fixDate(result);
    dispatch(getCharacterAction(character));

    dispatch(stopLoadingAction());
  };
}

export function getCharacterList(page = 1) {
  return async function (dispatch: Dispatch<CharacterAction>): Promise<Pagination> {
    dispatch(startLoadingAction());

    const { info, results } = await requests.get<ResultList<Character>>(`/character/?page=${page}`);

    const characters = results.map(fixDate);
    dispatch(getCharactersListAction(characters));

    dispatch(stopLoadingAction());

    return { nextPage: page + 1, hasMore: info.next !== null };
  };
}
