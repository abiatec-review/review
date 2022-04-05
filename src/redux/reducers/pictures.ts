import { PictureType,  ActionType as Action  } from 'types';
import { ActionType } from 'redux/actions/actionType';

const initialState: PictureType[] = [];

const pictureReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.SetPictures: {
            return [...state, ...action.payload];
        }
        case ActionType.ResetPictures: {
            return initialState;
        }
        default:
            return state;
    }
}

export default pictureReducer;