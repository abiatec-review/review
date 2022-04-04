import { ScrollAction, ScrollActionType } from "@models/actions";

export function scrollCharactersAction(offset: number): ScrollAction {
  return {
    type: ScrollActionType.SCROLL_CHARACTERS,
    payload: { data: offset }
  };
}

export function scrollLocationsAction(offset: number): ScrollAction {
  return {
    type: ScrollActionType.SCROLL_LOCATIONS,
    payload: { data: offset }
  };
}

export function scrollEpisodesAction(offset: number): ScrollAction {
  return {
    type: ScrollActionType.SCROLL_EPISODES,
    payload: { data: offset }
  };
}
