import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type Characters = {
  created?: string;
  episode?: string[];
  gender?: string;
  id: number;
  image?: string;
  location?: {
    name: string;
    url: string;
  };
  name?: string;
  origin?: {
    name: string;
    url: string;
  };
  species?: string;
  status?: string;
  type?: string;
  url?: string;
};

export type infoTypes = {
  count: number;
  next: string | null;
  pages: number;
  prev: string | null;
};

export type allDataInfo = {
  info: infoTypes;
  results: Characters[];
};

export type Episodes = {
  air_date: string;
  characters: string[];
  created: string;
  episode: string;
  id: number;
  name: string;
  url: string;
};

export type NextCharactersParams = {
  nextCharactersPage: string;
};
export type ThemeModeParams = {
  themeMode: number[];
};
export type FavoriteCharactersParams = {
  favoriteCharacters: number[];
};
export type FavoriteCharactersSuccessParams = {
  favoriteCharacters: Characters[];
};

// authentification.ts types
export type AuthSignUpParams = {
  email: string;
  password: string;
  userName: string;
};

export type AuthSignInParams = {
  email: string;
  password: string;
};

export type AuthSignInSuccessParams = {
  UID: string;
  displayName: string;
  email: string;
  photoURL: string;
  token: string;
};

export type AuthSignUpSuccessParams = {
  UID: string;
  displayName: string;
  email: string;
  token: string;
};
export type AuthSignUpErrorParams = {
  errorMessage: string;
};

export type UserLoadAvatarParams = {
  newUserAvatar: string;
};

//modal data types
export type ModalData = {
  modalType: string;
  modalData: Characters;
};

// navigation types
export type RootStackParamList = {
  Home: { headerShown: boolean };
  episodesList: { episodes: string[]; episodeNum: string };
  charactersFromEpisode: {
    urlForGetCharactersFromSelectedEpisode: string;
    episodes?: string[];
    episodeNum?: string;
  };
  charactersFrom: {
    episodes: string[];
    locationName: string;
    locationCharactersApi: string;
  };
};

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export type ScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
