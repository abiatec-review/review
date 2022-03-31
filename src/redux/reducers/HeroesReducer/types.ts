export interface IContentItem {
  name: string;
  id: string;
  image: string;
  status?: string;
}

export interface IHeroesState {
  heroes: IContentItem[],
  isError: boolean,
  isLoading: boolean,
}