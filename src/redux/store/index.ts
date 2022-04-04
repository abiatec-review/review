import { CharacterAction, EpisodeAction, LocationAction, ScrollAction } from "@models/actions";
import Store from "@models/store";
import { characterReducer, episodeReducer, locationReducer, scrollReducer } from "@reducers";
import {
  TypedUseSelectorHook,
  useDispatch as reduxDispatch,
  useSelector as reduxSelector
} from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware, { ThunkDispatch } from "redux-thunk";

const rootReducer = combineReducers({
  characterReducer,
  locationReducer,
  episodeReducer,
  scrollReducer
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

type Action = CharacterAction | LocationAction | EpisodeAction | ScrollAction;

export const useDispatch = () => reduxDispatch<ThunkDispatch<Store, any, Action>>();

export const useSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = reduxSelector;

export default store;
