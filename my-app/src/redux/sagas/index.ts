import { all } from 'redux-saga/effects'
import charactersSaga from './characters'
import episodeSaga from './episode'

export default function* rootSaga() {
    yield all ([
        charactersSaga(),
        episodeSaga()
    ]);
}