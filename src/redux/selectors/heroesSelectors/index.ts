import { RootReducer } from "redux/reducers";

export const getHeroesSelector = (state: RootReducer) => state?.heroReducer;

export const getHeroNameSelector = (state: RootReducer) => getHeroesSelector(state)?.heroName;
export const getNextPageSelector = (state: RootReducer) => getHeroesSelector(state)?.nextPage;