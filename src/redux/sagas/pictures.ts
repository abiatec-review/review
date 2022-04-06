import { put, call, all } from 'redux-saga/effects';
import { setPictures, resetPictures } from 'redux/actions/pictures';
import { setInfo, resetInfo } from 'redux/actions/info';
import { ActionType as Action } from 'types';
import api from 'services/api';


export function* fetchPictures(action: Action) {
    try {
        const { data } = yield call(api.get, `?name=${action.payload}`);
        const { info, results } = data;

        yield all([
            put(setPictures(results)),
            put(setInfo(info))
        ]);
    } catch {
        yield all([
            put(resetPictures()),
            put(resetInfo())
        ]);
    }
};

export function* fetchMorePictures(action: Action) {
    try {
        const { data } = yield call(api.get, action.payload);
        const { info, results } = data;
        yield all([
            put(setPictures(results)),
            put(setInfo(info))
        ]);
    } catch {
        yield all([
            put(resetPictures()),
            put(resetInfo())
        ]);
    }
};