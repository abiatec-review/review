import { FetchCharactersSuccess } from './../actions/CharacterActions';
import { CharacterActionTypes } from './../../types/CharacterTypes';
import { put, takeEvery, call } from 'redux-saga/effects';
import { fetchCharactersBySearchQuery } from '../../services/Characters.service';
import { AnyAction } from 'redux';

function* fetchCharactersWorker({ payload }: AnyAction): Generator<any, any, any> {
  try {
    console.log('inside saga', payload);
    const response = yield call(fetchCharactersBySearchQuery, payload);
    yield put(FetchCharactersSuccess(response));
  } catch (error) {
    console.log(error);
  }
}

export function* charactersWatcher() {
  yield takeEvery(CharacterActionTypes.FETCH_CHARACTERS, fetchCharactersWorker);
}