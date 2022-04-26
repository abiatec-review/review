import {takeEvery, put, all, select} from 'redux-saga/effects';

import {
    GET_CHARACTERS,
    setCharacters,
    GET_EPISODES,
    setEpisodes,
    setEpisodesCharacter, setError, setLoader
} from '../actions';

const getData = async (value:string, page:number) => {

    return await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${value}`)
        .then(res => res.json())
        .then(data => {
            if(value !== '') {
               return data
            } else {
                alert('Please enter some value')
            }
            }
        )
}

const getEpisode = async (value:string) => {

    return await fetch(`https://rickandmortyapi.com/api/episode/${value}`)
        .then(res => res.json())
        .then(data => data)
}


const getImages = async (value:string[]) => {

    return Promise.all(value.map(async(el) => {
    const response = await fetch(el)
    const data = await response.json()
         return data
    }
))
}

function* getCharactersSaga({payload}: {payload: {characterName: string}} ): Generator<any, any, any> {

    try {

        const {page, characters} = yield select((state: any) => state.characters);

        if(!characters.length && payload.characterName) {
            yield put(setLoader(true))
        }

        const newCharacters = yield getData(payload.characterName, page);

        yield put(setCharacters({results: [...characters, ...newCharacters.results], info: newCharacters.info}))

        yield put(setLoader(false))

    } catch(err: any) {
        console.log(err.message)
        yield put(setError(true))
        yield put(setLoader(false))
    }
}


function* getEpisodesSaga({payload}: {payload: {episodeName: string}}): Generator<any, any, any> {

    try {
        const episodes = yield getEpisode(payload.episodeName)

        yield put(setEpisodes(episodes))

        // first 3 characters of each episode
        const images = yield getImages(episodes.characters.slice(0,3))

        yield put(setEpisodesCharacter(images))

    } catch(err: any) {
        console.log(err.message)
    }
}

function* charactersSaga() {
    yield takeEvery(GET_CHARACTERS, getCharactersSaga)
}

function* episodesSaga() {
    yield takeEvery(GET_EPISODES, getEpisodesSaga)
}

export default function* rootSaga() {
    yield all([charactersSaga(), episodesSaga()])
}








