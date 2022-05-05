import { all } from 'redux-saga/effects'
import charactersSaga from './characters'
import episodeSaga from './episode'
import authSaga from './auth'

export default function* rootSaga() {
    yield all ([
        charactersSaga(),
        episodeSaga(),
        authSaga()
    ]);
}