import { takeEvery } from "redux-saga/effects";
import { fetchCardsSaga, fetchMoreCardsSaga } from "./cardSaga";
import { CardActionTypes } from "../actions/card";
import { EpisodesActionTypes } from "../actions/episodes";
import { fetchEpisodsSaga } from "./episodesSaga";
import { fetchCharacterSaga } from "./characterSaga";
import { CharacterActionTypes } from "../actions/character";

export function* saga() {
   yield takeEvery(CardActionTypes.FETCH_CARDS, fetchCardsSaga);
   yield takeEvery(CardActionTypes.FETCH_MORE_CARDS, fetchMoreCardsSaga);
   yield takeEvery(EpisodesActionTypes.FETCH_EPISODES, fetchEpisodsSaga);
   yield takeEvery(CharacterActionTypes.FETCH_CHARACTER, fetchCharacterSaga);
}