import { ActionType } from "redux/actions/actionType";
import { PictureType } from "types";

export const getPictures = (payload: string) => {
    return {
        type: ActionType.FetchPictures,
        payload,
    };
}

export const getMorePictures = (payload: string) => {
    return {
        type: ActionType.FetchMore,
        payload,
    };
}


export const setPictures = (payload: PictureType[]) => {
    return {
        type: ActionType.SetPictures,
        payload,
    };
}


export const resetPictures = () => {
    return {
        type: ActionType.ResetPictures
    };
}
