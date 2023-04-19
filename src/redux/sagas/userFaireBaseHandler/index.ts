import { all, put, takeEvery } from 'redux-saga/effects';
import { apiHelper, firebaseAPI_Handler } from '../../../api/api';

import { Characters, GetFaireBaseDataSuccess } from '../../../types/types';
import { getFavoriteCharactersSuccess } from '../../actions/characters/actions';
import {
  CharactersActionTypes,
  GetFavoriteCharactersActionType,
} from '../../actions/characters/action-types';
import {
  PutFaireBaseDataActionType,
  UserDataFromFirebaseActionTypes,
} from '../../actions/userDataFromFirebase/action-types';
import { getFaireBaseDataSuccess } from '../../actions/userDataFromFirebase/actions';

function* updateUserFaireBaseData({ payload }: PutFaireBaseDataActionType) {
  try {
    const fairbaseData: GetFaireBaseDataSuccess =
      yield firebaseAPI_Handler.putUserData(payload.uid, payload.newDataForFB);
    yield put(getFaireBaseDataSuccess(fairbaseData));
  } catch (err) {
    console.dir(err);
  }
}

function* getFavoriteCharactersFromApi({
  payload,
}: GetFavoriteCharactersActionType) {
  try {
    const favoriteCharacters: Characters[] = yield apiHelper(
      `https://rickandmortyapi.com/api/character/[${payload.favoriteCharacters}]`,
    );
    yield put(
      getFavoriteCharactersSuccess({
        favoriteCharacters,
      }),
    );
  } catch (err) {
    if (!payload.favoriteCharacters.length) {
      yield put(
        getFavoriteCharactersSuccess({
          favoriteCharacters: [],
        }),
      );
    }
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(
      UserDataFromFirebaseActionTypes.PUT_FIREBASE_USER_DATA,
      updateUserFaireBaseData,
    ),
    takeEvery(
      CharactersActionTypes.GET_USER_FAVORITE_CHARACTERS,
      getFavoriteCharactersFromApi,
    ),
  ]);
}
