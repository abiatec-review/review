export interface IHeroFromEpisode {
  name: string;
  id: string;
  image: string;
}

export interface IEpisodeState {
  heroes: IHeroFromEpisode[],
  name: string,
  episode: string,
  air_date: string,
  isError: boolean,
  isLoading: boolean
}