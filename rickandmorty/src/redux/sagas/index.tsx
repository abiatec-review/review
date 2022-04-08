import {takeEvery, put} from 'redux-saga/effects';
import axios from "axios";
//@ts-ignore
import {GET_CHARACTERS, SET_CHARACTERS, setCharacters} from '../actions';


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

// const getData = async (characterName:string) => {
//     return await axios.get(`https://rickandmortyapi.com/api/character/?name=${characterName}`)
// }


//@ts-ignore
function* getCharactersSaga({payload}) {
    try {
        //@ts-ignore
        const characters = yield getData(payload.characterName);
        console.log(characters)
        //@ts-ignore

        yield put(setCharacters(characters.results))

    } catch(err) {
        //@ts-ignore
        console.log(err.message)
    }
}

function* charactersSaga() {
    yield takeEvery(GET_CHARACTERS, getCharactersSaga)
}

export default charactersSaga;






