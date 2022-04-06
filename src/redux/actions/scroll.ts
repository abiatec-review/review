import { ScrollAction, ScrollActionType } from "@redux/models/actions";

export function scrollCharactersAction(data: number): ScrollAction {
  return {
    type: ScrollActionType.SCROLL_CHARACTERS,
    payload: { data }
  };
}

export function scrollLocationsAction(data: number): ScrollAction {
  return {
    type: ScrollActionType.SCROLL_LOCATIONS,
    payload: { data }
  };
}

export function scrollEpisodesAction(data: number): ScrollAction {
  return {
    type: ScrollActionType.SCROLL_EPISODES,
    payload: { data }
  };
}
