import { put, call } from 'redux-saga/effects';

import { fetchCharacters } from '../../api/servercies/fetchEpisodes';
import { CharacterActionTypes } from '../actions/character';

export function* fetchCharacterSaga(action: any): Generator<any, any, any> {
  try {
    const responseCharacter = yield call(fetchCharacters, action.payload);
    if (responseCharacter.hasOwnProperty('error')) {
      yield put({
        type: CharacterActionTypes.FETCH_CHARACTER_ERROR,
        payload: responseCharacter.error,
      });
    } else {
      yield put({
        type: CharacterActionTypes.FETCH_CHARACTER_SUCCESS,
        payload: responseCharacter,
      });
    }
  } catch (e) {
    console.log(e);
  }
}
