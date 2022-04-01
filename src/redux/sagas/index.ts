import {call, spawn, all} from 'redux-saga/effects'
import findHeroSaga from './findHeroSaga';
import loadContentfulSaga from './loadContentful';
import loadEpisodeSaga from './loadEpisodeSaga';

export default function* rootSaga() {
  const sagas = [findHeroSaga, loadEpisodeSaga, loadContentfulSaga];

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