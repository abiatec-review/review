import {
  TypedUseSelectorHook,
  useDispatch as reduxDispatch,
  useSelector as reduxSelector
} from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware, { ThunkDispatch } from "redux-thunk";

import {
  CharacterAction,
  EpisodeAction,
  LocationAction,
  ScrollAction
} from "@redux/models/actions";
import Store from "@redux/models/store";
import { character, episode, location, scroll } from "@redux/reducers";

const rootReducer = combineReducers({ character, location, episode, scroll });

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

type Action = CharacterAction | LocationAction | EpisodeAction | ScrollAction;

export const useDispatch = () => reduxDispatch<ThunkDispatch<Store, unknown, Action>>();

export const useSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = reduxSelector;

export default store;
