import { combineReducers } from "redux";
import { cardReducer } from "./cardsReducer";
import { episodesReducer } from "./episodesReducer";
import { characterReducer } from "./characterReducer";

export const rootReducer = combineReducers({
    cards: cardReducer,
    episodes: episodesReducer,
    character: characterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;