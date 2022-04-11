export enum ActionType {
    FetchMore = 'FETCH_MORE_IMAGES',
    FetchPictures = 'FETCH_PICTURES',
    FetchDetails = 'FETCH_DETAILS',
    Logout = 'LOGOUT',
    SetPictures = 'pictures/SET',
    SetPicturesInfo = 'info/SET',
    ResetPictures = 'pictures/RESET',
    ResetPicturesInfo = 'info/RESET',
    SetDetails = 'details/SET',
    SetDetailsIsLoaded = 'details/SET_IS_LOADED',
    SetDetailsLoadedError = 'details/SET_LOADED_ERROR',
    ResetDetails = 'details/RESET',
    SetUser = 'user/SET',
    ResetUser = 'user/RESET'
};

export default  ActionType;