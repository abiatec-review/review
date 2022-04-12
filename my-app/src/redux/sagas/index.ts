import { all } from 'redux-saga/effects'
import charactersSaga from './characters'
import episodeSaga from './episode'
import modalTypeSaga from './modalType'

export default function* rootSaga() {
    yield all ([
        modalTypeSaga(),
        charactersSaga(),
        episodeSaga()
    ]);
}