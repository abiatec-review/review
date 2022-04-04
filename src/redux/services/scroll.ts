import { scrollCharactersAction, scrollEpisodesAction, scrollLocationsAction } from "@actions";
import { ScrollAction } from "@models/actions";
import { Dispatch } from "redux";

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
