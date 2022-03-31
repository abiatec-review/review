import {call, spawn, all} from 'redux-saga/effects'
import findHeroSaga from './findHeroSaga';

export default function* rootSaga() {
  const sagas = [findHeroSaga];

  yield all(sagas.map(saga =>
    spawn(function* () {
      while (true) {
        try {
          yield call(saga)
          break
        } catch (e) {
          console.log(e)
        }
      }
    }))
  );
}