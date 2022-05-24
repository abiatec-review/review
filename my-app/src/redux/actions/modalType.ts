import * as actionTypes from "redux/actionTypes";

export const setCharacter = (modalType: string) => {
    return {
        type: actionTypes.SET_CHARACTER,
        payload: modalType
    };
};

export const setEpisode = (modalType: string) => {
    return {
        type: actionTypes.SET_EPISODE,
        payload: modalType
    };
};

