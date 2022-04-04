import { call, put, takeEvery } from "redux-saga/effects";

import { LOAD_EPISODE, LOAD_EPISODE_LOADING, LOAD_EPISODE_SUCCESS, LOAD_HEROES_FROM_EPISODE } from "redux/actions/episodeActions";

import { defineEpisodeIndex, getThreeRandomElements } from "utils/validator";

import { getEpisode, getHeroesInfo } from "./api";

export function* loadEpisodeWatcher({payload}: any): Generator<any, any, any> {
  try {

    yield put({
      type: LOAD_EPISODE_LOADING
    })

    const episode = yield call(getEpisode, payload)
    
    yield put({
      type: LOAD_EPISODE_SUCCESS,
      payload: episode
    })

    yield put({
      type: LOAD_EPISODE_LOADING
    })

    const heroesFromEpisode = getThreeRandomElements(episode.characters)

    const heroes = yield call(getHeroesInfo, [
      defineEpisodeIndex(heroesFromEpisode[0]), 
      defineEpisodeIndex(heroesFromEpisode[1]), 
      defineEpisodeIndex(heroesFromEpisode[2])
    ])
    
    yield put({
      type: LOAD_HEROES_FROM_EPISODE,
      payload: heroes
    })
  } catch (e) {
    console.log(e)
  }
}

export default function* loadEpisodeSaga() {
  yield takeEvery(LOAD_EPISODE, loadEpisodeWatcher)
}