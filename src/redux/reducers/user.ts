import { PictureType,  ActionType as Action  } from 'types';
import { ActionType } from 'redux/actions/actionType';

const initialState: any = {};

const userReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.SetUser: {
            return {...state, ...action.payload};
        }
        case ActionType.ResetUser: {
            return initialState;
        }
        default:
            return state;
    }
}

export default userReducer;