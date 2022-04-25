export interface IContentItem {
  name: string;
  id: string;
  image: string;
  status?: string;
  episode?: string[];
  location?: {
    name: string
  }
}

export interface IHeroesState {
  heroes: IContentItem[],
  isError: boolean,
  isLoading: boolean,
  heroName: string,
  nextPage: string,
  isSortedByLocation: boolean,
  isSortedByName: boolean,
  allFilters: {
    gender: string,
    status: string,
  }
}