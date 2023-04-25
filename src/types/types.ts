import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type CharacterLocation = {
  created?: string;
  dimension?: string;
  id?: number;
  name?: string;
  residents?: string[];
  type?: string;
  url?: string;
  episode?: string[];
  gender?: string;
  image?: string;
  location?: { name: string; url: string };
  origin?: { name: string; url: string };
  species?: string;
  status?: string;
};

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
  themeMode: string;
};
export type FavoriteCharactersParams = {
  favoriteCharacters: number[] | unknown;
};
export type FavoriteCharactersSuccessParams = {
  favoriteCharacters?: Characters[];
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
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  token: string | null | undefined;
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
  modalData: CharacterLocation | null;
};

//firebase actions types
export type GetFaireBaseDataSuccess = {
  // favoriteChars: (string | { charId?: number })[];
  favoriteChars: { charId?: number }[] | '';
  additionalData?: string;
};

export type ErrorParams = {
  errorMessage: string;
};

// export type newDataForFB = {

export type PutFaireBaseData = {
  newDataForFB: {
    additionalData: string;
    favoriteChars: { charId?: number }[] | unknown;
  };
  uid: string;
};

// navigation types
export type RootStackParamList = {
  Home: { headerShown: boolean };
  episodesList: { episodes: string[]; episodeNum?: string };
  charactersFromEpisode: {
    urlForGetCharactersFromSelectedEpisode: string;
    episodes?: string[];
    episodeNum?: string;
  };
  charactersFrom: {
    // episodes: string[];
    name: string;
    url: string;
  };
};

export type ScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
