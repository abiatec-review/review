import { StateInfoType, ActionType as Action } from 'types';
import { ActionType } from 'redux/actions/actionType';


const initialState: StateInfoType = {
    count: 0,
    pages: null,
    next: null,
    prev: null
};

const infoReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.SetPicturesInfo: {
            return action.payload
        }
        case ActionType.ResetPicturesInfo: {
            return initialState
        }
        default:
            return state
    }
}



export default infoReducer;