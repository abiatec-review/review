import { put, call, all } from 'redux-saga/effects';
import { resetUser } from 'redux/actions/user';

import { logout } from 'services/firebase'
import { ActionType as Action } from 'types';

export function* logoutUser(action: Action) {
    try {
        yield call(logout);

        yield put(resetUser());
        
    } catch {

    }
};