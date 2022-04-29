import { FetchCharactersMoreSuccess, FetchCharactersSuccess, SavePageInfo } from './../actions/CharacterActions';
import { CharacterActionTypes } from './../../types/CharacterTypes';
import { put, takeEvery, call } from 'redux-saga/effects';
import { fetchCharactersBySearchQuery } from '../../services/Characters.service';
import { AnyAction } from 'redux';

function* fetchCharactersWorker({ payload }: AnyAction): Generator<any, any, any> {
  const { searchString, pageNumber } = payload;

  try {
    const response = yield call(fetchCharactersBySearchQuery, searchString, pageNumber);
    yield put(FetchCharactersSuccess(response.results));
    yield put(SavePageInfo(response.info));
  } catch (error) {
    console.log(error);
  }
}

function* fetchCharactersMoreWorker({ payload }: AnyAction): Generator<any, any, any> {
  const { searchString, pageNumber } = payload;

  try {
    const response = yield call(fetchCharactersBySearchQuery, searchString, pageNumber);
    yield put(FetchCharactersMoreSuccess(response.results));
  } catch (error) {
    console.log(error);
  }
}

export function* charactersWatcher() {
  yield takeEvery(CharacterActionTypes.FETCH_CHARACTERS, fetchCharactersWorker);
  yield takeEvery(CharacterActionTypes.FETCH_CHARACTERS_MORE, fetchCharactersMoreWorker);
}