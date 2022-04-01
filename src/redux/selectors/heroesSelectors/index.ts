import { RootReducer } from "../../reducers";

export const getHeroName = (state: RootReducer) => state?.heroes?.heroName
export const getNextPage = (state: RootReducer) => state?.heroes?.nextPage