import { call, put, takeEvery } from "redux-saga/effects";
import { defineEpisodeIndex } from "../../../utils/validator";
import { LOAD_EPISODE, LOAD_EPISODE_SUCCESS, LOAD_HEROES_FROM_EPISODE } from "../../actions/episodeActions";

import { LOAD_HEROES, LOAD_HEROES_FAILURE, LOAD_HEROES_SUCCESS, LOAD_HEROES_LOADING } from "../../actions/heroActions";
import { getEpisode, getHeroesInfo } from "./api";

export function* loadEpisodeWatcher({payload}: any): Generator<any, any, any> {
  try {

    // yield put({
    //   type: LOAD_HEROES_LOADING
    // })

    const episode = yield call(getEpisode, payload)
    yield put({
      type: LOAD_EPISODE_SUCCESS,
      payload: episode
    })

    const heroes = yield call(getHeroesInfo, [
      defineEpisodeIndex(episode.characters[0]), 
      defineEpisodeIndex(episode.characters[1]), 
      defineEpisodeIndex(episode.characters[episode.characters.length-1])
    ])
    
    yield put({
      type: LOAD_HEROES_FROM_EPISODE,
      payload: heroes
    })
  } catch (e) {
    // yield put({
    //   type: LOAD_HEROES_FAILURE,
    // })
  }
}

export default function* loadEpisodeSaga() {
  yield takeEvery(LOAD_EPISODE, loadEpisodeWatcher)
}