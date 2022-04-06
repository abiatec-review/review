import { redefineCardList } from 'redux&saga/actions/cardsActions';
import { CardActionTypes, IAction } from 'redux&saga/types';
import { put, takeEvery } from 'redux-saga/effects';

const { GET_CARDS } = CardActionTypes;

export function* getCardsSaga(action: IAction) {
  try {
    const resp:Object = yield fetch(`https://rickandmortyapi.com/api/character/?name=${action.payload}`)
      .then((response) => response.json()).catch((err) => { throw err; });
    yield put(redefineCardList(resp));
  } catch (error) {
    console.log();
  }
}

const cardsSaga = [
  takeEvery(GET_CARDS, getCardsSaga),
];

export default cardsSaga;
