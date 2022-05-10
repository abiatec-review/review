import { takeEvery } from 'redux-saga/effects';

import { CardActionTypes } from '../actions/card';
import { CharacterActionTypes } from '../actions/character';
import { EpisodesActionTypes } from '../actions/episodes';
import { fetchCardsSaga, fetchMoreCardsSaga } from './cardSaga';
import { fetchCharacterSaga } from './characterSaga';
import { fetchEpisodsSaga } from './episodesSaga';

export function* saga() {
  yield takeEvery(CardActionTypes.FETCH_CARDS, fetchCardsSaga);
  yield takeEvery(CardActionTypes.FETCH_MORE_CARDS, fetchMoreCardsSaga);
  yield takeEvery(EpisodesActionTypes.FETCH_EPISODES, fetchEpisodsSaga);
  yield takeEvery(CharacterActionTypes.FETCH_CHARACTER, fetchCharacterSaga);
}
