import { combineReducers } from "redux";
import heroReducer from "./HeroesReducer";

export const rootReducer = combineReducers({
  heroes: heroReducer
})

export type RootReducer = ReturnType<typeof rootReducer>