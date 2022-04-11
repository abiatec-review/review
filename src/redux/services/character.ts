import { map } from "bluebird";
import { Dispatch } from "redux";

import {
  getCharactersFailedAction,
  getCharactersSuccessAction,
  getFilteredCharactersFailedAction,
  getFilteredCharactersSuccessAction
} from "@redux/actions";
import { CharacterAction } from "@redux/models/actions";
import { Character, ReducedCharacter, ResultList } from "@redux/models/entities";

import requests, { getPagedData } from "./base";

export function getCharactersByName(name: string, page = 1) {
  return async function (dispatch: Dispatch<CharacterAction>) {
    try {
      const result = await requests.get<ResultList<Character>>(
        `/character/?name=${name}&page=${page}`
      );
      const data = getPagedData(page, result);
      dispatch(getFilteredCharactersSuccessAction(data));
    } catch (error) {
      if (error instanceof Error) {
        error.message !== "Request failed with status code 404" &&
          dispatch(getFilteredCharactersFailedAction(String(error)));
      }
    }
  };
}

export function getCharacters(page = 1) {
  return async function (dispatch: Dispatch<CharacterAction>) {
    try {
      const result = await requests.get<ResultList<Character>>(`/character/?page=${page}`);
      const data = getPagedData(page, result);
      dispatch(getCharactersSuccessAction(data));
    } catch (error) {
      dispatch(getCharactersFailedAction(String(error)));
    }
  };
}

export function getCharactersByUrls(urls: Array<string>) {
  return map(urls, (url) => requests.get<ReducedCharacter>(url));
}
