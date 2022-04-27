import { RootReducer } from "redux/reducers";
import {IContentItem} from "redux/reducers/HeroesReducer/types";

export const getHeroesSelector = (state: RootReducer) => state?.heroReducer;

export const getSortedHeroesSelector = (state: RootReducer) => {
    const allHeroes = getHeroesSelector(state).heroes;
    const allHeroesWithoutSort: IContentItem[] = [...allHeroes]

    const isSortedByLocation = getHeroesSelector(state)?.isSortedByLocation;
    const isSortedByName = getHeroesSelector(state)?.isSortedByName;

    switch (true) {
        case(isSortedByLocation && !isSortedByName): {
            return allHeroesWithoutSort.sort((a, b) => {
                if(a.location && b.location) {
                    if (a.location.name > b.location.name) {
                        return 1;
                    }
                    if (a.location.name < b.location.name) {
                        return -1;
                    }
                }
                return 0;
            })
        }
        case(isSortedByName && !isSortedByLocation): {
            return allHeroesWithoutSort.sort((a, b) => {
                if(a.name && b.name) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    }
                }
                return 0;
            })
        }
        case(isSortedByName && isSortedByLocation): {
            return allHeroesWithoutSort.sort((a, b) => {
                if(a.location && b.location) {
                    if(a.name && b.name && a.location.name && b.location.name) {
                        if (a.name > b.name) {
                            if(a.location.name > b.location.name) {
                                return 1;
                            } else {
                                return -1
                            }
                        }
                        if (a.name < b.name) {
                            return -1;
                        }
                    }
                }
                return 0;
            })
        }
        default: return allHeroesWithoutSort
    }
}

export const getFilteredHeroesSelector = (state: RootReducer) => {
    const allHeroes = getSortedHeroesSelector(state);
    const allFilters = getHeroesSelector(state)?.allFilters;
    let arr = [...allHeroes]
    Object.entries(allFilters).forEach(elem => {
        if(elem[1]) {
            // @ts-ignore
            arr = arr.filter(hero => hero[elem[0]] === elem[1])
        }
    })
    return  arr
}

export const getHeroNameSelector = (state: RootReducer) => getHeroesSelector(state)?.heroName;
export const getNextPageSelector = (state: RootReducer) => getHeroesSelector(state)?.nextPage;