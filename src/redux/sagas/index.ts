import {call, spawn, all} from 'redux-saga/effects'
import findHeroSaga from './findHeroSaga';
import loadContentfulSaga from './loadContentful';
import loadEpisodeSaga from './loadEpisodeSaga';
import loadUserSaga from './loadUserSaga';

export default function* rootSaga() {
  const sagas = [findHeroSaga, loadEpisodeSaga, loadContentfulSaga, loadUserSaga];

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