import { RootReducer } from "../../reducers";

export const getHeroesSelector = (state: RootReducer) => state?.heroes;

export const getHeroNameSelector = (state: RootReducer) => {
  const heroes = getHeroesSelector(state);
  return heroes?.heroName;
}
export const getNextPageSelector = (state: RootReducer) => {
  const heroes = getHeroesSelector(state);
  return heroes?.nextPage
}