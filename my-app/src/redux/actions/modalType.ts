import { SET_CHARACTER, SET_EPISODE } from "redux/actionTypes";

export const setCharacter = (modalType: string) => {
    return {
        type: SET_CHARACTER,
        payload: modalType
    };
};

export const setEpisode = (modalType: any) => {
    return {
        type: SET_EPISODE,
        payload: modalType
    };
};

