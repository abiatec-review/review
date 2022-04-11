import { ActionType as Action } from 'types';
import { ActionType } from 'redux/actions/actionType';

const initialState: any = {
    isLoaded: false,
    loadedWithError: false
};

const detailsReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.SetDetails: {
            return { ...state, ...action.payload }
        }
        case ActionType.SetDetailsIsLoaded: {
            return { ...state, isLoaded: action.payload }
        }
        case ActionType.SetDetailsLoadedError: {
            return { ...state, loadedWithError: action.payload }
        }
        case ActionType.ResetDetails: {
            return initialState;
        }
        default:
            return state;
    }
}

export default detailsReducer;