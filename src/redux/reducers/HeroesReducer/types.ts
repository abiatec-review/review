export interface IContentItem {
  name: string;
  id: string;
  image: string;
  status?: string;
  episode?: string[]
}

export interface IHeroesState {
  heroes: IContentItem[],
  isError: boolean,
  isLoading: boolean,
  heroName: string,
  nextPage: string
}