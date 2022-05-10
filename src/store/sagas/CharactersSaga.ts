import { FetchCharactersMoreSuccess, FetchCharactersSuccess, SavePageInfo } from './../actions/CharacterActions';
import { CharacterActionTypes } from './../../types/CharacterTypes';
import { put, takeEvery, call } from 'redux-saga/effects';
import { fetchCharactersBySearchQuery } from '../../services/Characters.service';
import { AnyAction } from 'redux';

function* fetchCharactersWorker({ payload }: AnyAction): Generator<any, any, any> {
  const { searchString, pageNumber, statusFilterState, genderFilterState } = payload;

  try {
    const response = yield call(fetchCharactersBySearchQuery, searchString, pageNumber, statusFilterState, genderFilterState);
    if (response.error) {
      throw new Error();
    } else {
      yield put(FetchCharactersSuccess(response.results));
      yield put(SavePageInfo(response.info));
    }
  } catch (error) {
    const a: any = [];
    yield put(FetchCharactersSuccess(a));
  }
}

function* fetchCharactersMoreWorker({ payload }: AnyAction): Generator<any, any, any> {
  const { searchString, pageNumber, statusFilterState, genderFilterState } = payload;

  try {
    const response = yield call(fetchCharactersBySearchQuery, searchString, pageNumber, statusFilterState, genderFilterState);
    yield put(FetchCharactersMoreSuccess(response.results));
  } catch (error) {
    console.log(error);
  }
}

export function* charactersWatcher() {
  yield takeEvery(CharacterActionTypes.FETCH_CHARACTERS, fetchCharactersWorker);
  yield takeEvery(CharacterActionTypes.FETCH_CHARACTERS_MORE, fetchCharactersMoreWorker);
}