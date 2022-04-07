import { ActionType } from "redux/actions/actionType";

export const setUser = (payload: any) => {
    return {
        type: ActionType.SetUser,
        payload,
    };
}

export const resetUser = () => {
    return {
        type: ActionType.ResetUser
    };
}


export const logout = () => {
    return {
        type: ActionType.Logout
    };
}
