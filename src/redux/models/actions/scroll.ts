import { SuccessAction } from "./action";

export const enum ScrollActionType {
  SCROLL_CHARACTERS = "SCROLL_CHARACTERS",
  SCROLL_LOCATIONS = "SCROLL_LOCATIONS",
  SCROLL_EPISODES = "SCROLL_EPISODES"
}

type CharacterScrollAction = SuccessAction<ScrollActionType.SCROLL_CHARACTERS, number>;

type LocationScrollAction = SuccessAction<ScrollActionType.SCROLL_LOCATIONS, number>;

type EpisodeScrollAction = SuccessAction<ScrollActionType.SCROLL_EPISODES, number>;

export type ScrollAction = CharacterScrollAction | LocationScrollAction | EpisodeScrollAction;
