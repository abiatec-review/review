import {
  getCharacterFailedAction,
  getCharacterListFailedAction,
  getCharacterListSuccessAction,
  getCharacterSuccessAction,
  startLoadingAction,
  stopLoadingAction
} from "@actions";
import { CharacterAction } from "@models/actions";
import { Character, ResultList } from "@models/entities";
import { Dispatch } from "redux";

import requests, { fixDate } from "./base";

export function getCharacter(id: number) {
  return async function (dispatch: Dispatch<CharacterAction>) {
    dispatch(startLoadingAction());
    try {
      const result = await requests.get<Character>(`/character/${id}`);
      const character = fixDate(result);
      dispatch(getCharacterSuccessAction(character));
    } catch (error) {
      dispatch(getCharacterFailedAction(String(error)));
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
      dispatch(getCharacterListSuccessAction(characters));
      return { nextPage: page + 1, hasMore: info.next !== null };
    } catch (error) {
      dispatch(getCharacterListFailedAction(String(error)));
    } finally {
      dispatch(stopLoadingAction());
    }
  };
}
