import { map } from "bluebird";
import { Dispatch } from "redux";

import {
  getCharactersFailedAction,
  getCharactersSuccessAction,
  getFilteredCharactersFailedAction,
  getFilteredCharactersSuccessAction,
  startLoadingAction,
  stopLoadingAction
} from "@redux/actions";
import { CharacterAction } from "@redux/models/actions";
import { Character, ReducedCharacter, ResultList } from "@redux/models/entities";

import requests, { fixDate } from "./base";

export function getCharactersByName(name: string, page = 1) {
  return async function (dispatch: Dispatch<CharacterAction>) {
    dispatch(startLoadingAction());
    try {
      const { info, results } = await requests.get<ResultList<Character>>(
        `/character/?name=${name}&page=${page}`
      );
      // .catch((s:Error) => );
      const characters = results.map(fixDate);
      dispatch(getFilteredCharactersSuccessAction(characters, page));
      return info.pages !== page;
    } catch (error) {
      if (error instanceof Error) {
        error.message !== "Request failed with status code 404" &&
          dispatch(getFilteredCharactersFailedAction(String(error)));
      }
    } finally {
      dispatch(stopLoadingAction());
    }
  };
}

export function getCharacterList(page: number) {
  return async function (dispatch: Dispatch<CharacterAction>) {
    dispatch(startLoadingAction());
    try {
      const { info, results } = await requests.get<ResultList<Character>>(
        `/character/?page=${page}`
      );
      const characters = results.map(fixDate);
      dispatch(getCharactersSuccessAction(characters));
      return info.pages !== page;
    } catch (error) {
      dispatch(getCharactersFailedAction(String(error)));
    } finally {
      dispatch(stopLoadingAction());
    }
  };
}

export function getCharactersByUrls(urls: Array<string>) {
  return map(urls, (url) => requests.get<ReducedCharacter>(url));
}
