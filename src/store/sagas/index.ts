import { all, call, spawn } from 'redux-saga/effects';
import { charactersWatcher } from './CharactersSaga';

export default function* rootSaga() {
  const sagas = [charactersWatcher];

  yield all(sagas.map(saga =>
    spawn(function* () {
      while (true) {
        try {
          yield call(saga);
          break;
        } catch (e) {
          console.log(e);
        }
      }
    })),
  );
}