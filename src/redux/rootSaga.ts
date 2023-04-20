import { all } from 'redux-saga/effects';
import charactrs from './characters/saga';
import getAdditional from './additionalData/saga/getAdditional';
import auth from './authentication/saga';
import faireBaseSaga from './userDataFromFirebase/saga';

export default function* rootSaga() {
  yield all([charactrs(), getAdditional(), auth(), faireBaseSaga()]);
}
