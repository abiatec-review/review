import { fetchCharactersByIds } from './../../services/Characters.service';
import { FetchEpisodesSuccess, FetchEpisodesCharactersSuccess } from './../actions/EpisodesAction';
import { EpisodesActionTypes } from './../../types/EpisodesTypes';
import { put, takeEvery, call } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import { fetchEpisodesById } from '../../services/Episodes.service';

function* fetchEpisodesWorker({ payload }: AnyAction): Generator<any, any, any> {
  try {
    const response = yield call(fetchEpisodesById, payload);
    if (Array.isArray(response)) {
      yield put(FetchEpisodesSuccess(response));
    } else {
      yield put(FetchEpisodesSuccess([response]));
    }
  } catch (error) {
    console.log(error);
  }
}

function* fetchEpisodeCharactersWorker({ payload }: AnyAction): Generator<any, any, any> {
  const { characters, episodeName } = payload;

  try {
    const response = yield call(fetchCharactersByIds, characters);

    yield put(FetchEpisodesCharactersSuccess({ [episodeName]: response }));
  } catch (error) {
    console.log(error);
  }
}

export function* episodesWatcher() {
  yield takeEvery(EpisodesActionTypes.FETCH_EPISODES, fetchEpisodesWorker);
  yield takeEvery(EpisodesActionTypes.FETCH_EPISODE_CHARACTERS, fetchEpisodeCharactersWorker);
}