import {TCharacter} from "models";

export enum Characters {
  GET_CHARACTERS = 'GET_CHARACTERS',
  SET_CHARACTERS = 'SET_CHARACTERS',
  DELETE_CHARACTERS = 'DELETE_CHARACTERS'
}

export enum Episodes {
  GET_EPISODES = 'GET_EPISODES',
  SET_EPISODES = 'SET_EPISODES',
  GET_EPISODES_CHARACTER = 'GET_EPISODES_CHARACTER',
  SET_EPISODES_CHARACTER = 'SET_EPISODES_CHARACTER',
  DELETE_EPISODES_CHARACTER = 'DELETE_EPISODES_CHARACTER'
}

export enum LoaderError {
  SET_LOADER = 'SET_LOADER',
  SET_ERROR = 'SET_ERROR'
}

export enum Sign {
  SIGN_UP = 'SIGN_UP',
  SIGN_IN = 'SIGN_IN'
}

export enum Sort {
  SORT_CHARACTERSNAME = 'SORT_CHARACTERSNAME',
  SORT_CHARACTERSID = 'SORT_CHARACTERSID',
  SORT_CHARACTERSLOCATION = 'SORT_CHARACTERSLOCATION',
  SORT_CHARACTERSNAMELOCATION = 'SORT_CHARACTERSNAMELOCATION'
}


export const getCharacters = (payload: {characterName: string}) => {

  return {
    type: Characters.GET_CHARACTERS,
    payload
  }
}

export const setCharacters = (payload: {results: Array<TCharacter<string>>, info: Record<string, unknown>}) => {

  return {
    type: Characters.SET_CHARACTERS,
    payload
  }
}

export const deleteCharacters = () => {

  return {
    type: Characters.DELETE_CHARACTERS,
  }
}

export const setError = (payload: boolean) => {

  return {
    type: LoaderError.SET_ERROR,
    payload
  }
}

export const setLoader = (payload: boolean) => {

  return {
    type: LoaderError.SET_LOADER,
    payload
  }
}

export const getEpisodes = (payload: {episodeName: string}) => {
  return {
    type: Episodes.GET_EPISODES,
    payload
  }
}

export const setEpisodes = (payload: string) => {
  return {
    type: Episodes.SET_EPISODES,
    payload
  }
}

export const setEpisodesCharacter = (payload: string) => {
  return {
    type: Episodes.SET_EPISODES_CHARACTER,
    payload
  }
}

export const deleteEpisodesCharacter = () => {
  return {
    type: Episodes.DELETE_EPISODES_CHARACTER,
  }
}

export const signUpAuth = (payload: {email: string, password: string, name: string, surname: string, login: boolean}) => {
  return {
    type: Sign.SIGN_UP,
    payload
  }
}

export const signInAuth = (payload: {email: string}) => {
  return {
    type: Sign.SIGN_IN,
    payload
  }
}

export const sortCharactersId = () => {
  return {
    type: Sort.SORT_CHARACTERSID
  }
}

export const sortCharactersName = () => {
  return {
    type: Sort.SORT_CHARACTERSNAME
  }
}

export const sortCharactersLocation = () => {
  return {
    type: Sort.SORT_CHARACTERSLOCATION
  }
}

export const sortCharactersNameLocation = () => {
  return {
    type: Sort.SORT_CHARACTERSNAMELOCATION
  }
}
