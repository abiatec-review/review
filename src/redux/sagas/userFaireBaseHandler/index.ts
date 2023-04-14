import { all, put, takeEvery } from 'redux-saga/effects';
import { apiHelper, firebaseAPI_Handler } from '../../../api/api';
import { actionsTypes } from '../../actions/actionsType';
import { getFaireBaseDataSuccess } from '../../actions/userDataFromFairebase';
import { Characters } from '../../../types/types';
import { getFavoriteCharactersSuccess } from '../../actions/characters/actions';
import { CharactersActionTypes } from '../../actions/characters/action-types';

function* updateUserFaireBaseData({ payload }: any) {
  try {
    const fairbaseData = yield firebaseAPI_Handler.putUserData(
      payload.uid,
      payload.newDataForFB,
    );
    yield put(getFaireBaseDataSuccess({ fairbaseData }));
  } catch (err) {
    console.dir(err);
  }
}

function* getFavoriteCharactersFromApi({ payload }: any) {
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
    takeEvery(actionsTypes.PUT_FAIRBASE_USER_DATA, updateUserFaireBaseData),
    takeEvery(
      CharactersActionTypes.GET_USER_FAVORITE_CHARACTERS,
      getFavoriteCharactersFromApi,
    ),
  ]);
}
