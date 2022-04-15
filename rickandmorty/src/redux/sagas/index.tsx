import {takeEvery, put, all, call} from 'redux-saga/effects';

//@ts-ignore
import {
    GET_CHARACTERS,
    setCharacters,
    GET_EPISODES,
    setEpisodes,
    setEpisodesCharacter,
    GET_EPISODES_CHARACTER,
    getEpisodesCharacter
} from '../actions';


const getData = async (value:string) => {
    return await fetch(`https://rickandmortyapi.com/api/character/?name=${value}`)
        .then(res => (res.ok)
           ? res.json()
        : Promise.reject(res.status))
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
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log('episodeData', data);
           return data
        })
}



const getImages = async (value:string[]) => {
    console.log(value)
    const res = []
     Promise.all(value.map(async(el) => {
    const response = await fetch(el)
        console.log(response)
    const data = await response.json()
        console.log(data)
    // console.log(data.image)
    res.push(data.image)
    }
))
    return res
}
//@ts-ignore
function* getCharactersSaga({payload}) {
    try {
        //@ts-ignore
        const characters = yield getData(payload.characterName);

        yield put(setCharacters(characters.results))

    } catch(err) {
        //@ts-ignore
        console.log(err.message)
    }
}

//@ts-ignore
function* getEpisodesSaga({payload}) {
    console.log(payload)
    try {
        //@ts-ignore
        const episodes = yield getEpisode(payload.episodeName)
        console.log(episodes)
        yield put(setEpisodes(episodes))

        console.log(episodes.characters.slice(0,3))
        //@ts-ignore
        const images = yield getImages(episodes.characters.slice(0,3))
        console.log(images)
        yield put(setEpisodesCharacter(images))

    } catch(err) {
        //@ts-ignore
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








