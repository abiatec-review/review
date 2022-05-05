import { all, call, spawn } from 'redux-saga/effects';
import { charactersWatcher } from './CharactersSaga';
import { episodesWatcher } from './EpisodesSaga';

export default function* rootSaga() {
  const sagas = [charactersWatcher, episodesWatcher];

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