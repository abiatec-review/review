export interface IInfo {
  count: number,
  next?: string | null,
  pages?: number,
  prev?: string | null,
}

export interface ILocation {
  name: string,
  url: string,
}

export interface IOrigin {
  name: string,
  url: string,
}

export interface IResults {
  created: string,
  episode: string[],
  gender: string,
  name: string
  id: number,
  image: string,
  location: ILocation,
  origin?: IOrigin,
  species?: string,
  status: string,
  type?: string,
  url: string,
}

export interface IResponse {
  info: IInfo,
  results: IResults[],
}

export interface IEpisode {
  id: number,
  name: string,
  air_date: string,
  episode: string,
  characters: string[],
  url: string,
  created: string,
}
