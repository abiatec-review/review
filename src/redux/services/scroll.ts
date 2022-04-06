import { Dispatch } from "redux";

import {
  scrollCharactersAction,
  scrollEpisodesAction,
  scrollLocationsAction
} from "@redux/actions";
import { ScrollAction } from "@redux/models/actions";

export function scrollCharacters(offset: number) {
  return function (dispatch: Dispatch<ScrollAction>) {
    dispatch(scrollCharactersAction(offset));
  };
}

export function scrollLocations(offset: number) {
  return function (dispatch: Dispatch<ScrollAction>) {
    dispatch(scrollLocationsAction(offset));
  };
}

export function scrollEpisodes(offset: number) {
  return function (dispatch: Dispatch<ScrollAction>) {
    dispatch(scrollEpisodesAction(offset));
  };
}
