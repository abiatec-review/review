import { ActionType } from "redux/actions/actionType";
import { StringsKeysObjectInterface, EpisodesInfoType } from "types";


export const fetchDetails = (payload: string[]) => {
    return {
        type: ActionType.FetchDetails,
        payload,
    };
}

export const setDetails = (payload: {
    charactersPictures: StringsKeysObjectInterface<string>,
    episodesInfo: StringsKeysObjectInterface<EpisodesInfoType>
}) => {
    return {
        type: ActionType.SetDetails,
        payload,
    };
}
export const resetDetails = () => {
    return {
        type: ActionType.ResetDetails
    };  
}

export const setIsLoaded = (payload: boolean) => {
    return {
        type: ActionType.SetDetailsIsLoaded,
        payload,
    };
}

export const setLoadedWithError = (payload: boolean) => {
    return {
        type: ActionType.SetDetailsLoadedError,
        payload,
    };
}