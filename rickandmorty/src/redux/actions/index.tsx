import {TCharacter} from "../../models/character";
export const GET_CHARACTERS = 'GET_CHARACTERS';
export const SET_CHARACTERS = 'SET_CHARACTERS';
export const DELETE_CHARACTERS = 'DELETE_CHARACTERS';
export const GET_EPISODES = 'GET_EPISODES';
export const SET_EPISODES = 'SET_EPISODES';
export const GET_EPISODES_CHARACTER = 'GET_EPISODES_CHARACTER';
export const SET_EPISODES_CHARACTER = 'SET_EPISODES_CHARACTER';
export const DELETE_EPISODES_CHARACTER = 'DELETE_EPISODES_CHARACTER';
export const SET_LOADER = 'SET_LOADER';
export const SET_ERROR = 'SET_ERROR';


export const getCharacters = (payload: {characterName: string}) => {

    return {
        type: GET_CHARACTERS,
        payload
    }
}

export const setCharacters = (payload: {results: Array<TCharacter<string>>, info: Record<string, unknown>}) => {

    return {
        type: SET_CHARACTERS,
        payload
    }
}

export const setError = (payload: boolean) => {

    return {
        type: SET_ERROR,
        payload
    }
}

export const setLoader = (payload: boolean) => {

    return {
        type: SET_LOADER,
        payload
    }
}

export const deleteCharacters = () => {

    return {
        type: DELETE_CHARACTERS,
    }
}

export const getEpisodes = (payload: {episodeName: string}) => {
    return {
        type: GET_EPISODES,
        payload
    }
}

export const setEpisodes = (payload: string) => {
    return {
        type: SET_EPISODES,
        payload
    }
}

export const setEpisodesCharacter = (payload: string) => {
    return {
        type: SET_EPISODES_CHARACTER,
        payload
    }
}

export const deleteEpisodesCharacter = () => {
    return {
        type: DELETE_EPISODES_CHARACTER,
    }
}



