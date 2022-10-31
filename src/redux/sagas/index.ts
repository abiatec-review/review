import {all} from 'redux-saga/effects';
import charactrs from './characters';
import getAdditional from './getAdditional/getAdditional';

export default function* rootSaga() {
  yield all([charactrs(), getAdditional()]);
}
