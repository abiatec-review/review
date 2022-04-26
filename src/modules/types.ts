export interface Item {
  id: number;
  name: string;
  status: string;
  species: string;
  type?: string;
  gender?: string;
  origin?: {
    name?: string;
    url?: string;
  };
  location?: {
    name?: string;
    url?: string;
  };
  image: string;
  episode: Array<string>;
  url?: string;
  created?: string;
}

export interface Episode {
  id: 1;
  name: string;
  airDate?: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface State {
  characterList: Array<Item>;
  searchedCharactersName: string;
  currentListPage: number;
  isFetchingData: boolean;
  errorMessage: string;
}
