import { ActionType } from "redux/actions/actionType";
import { StateInfoType } from "types";

export const setInfo = (payload: StateInfoType) => {
    return {
        type: ActionType.SetPicturesInfo,
        payload,
    };
}

export const resetInfo = () => {
    return {
        type: ActionType.ResetPicturesInfo
    };
}
