import {
  applyMiddleware, combineReducers, createStore, Store,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import cardsReducer from './reducers/cardsReducer';
import episodesReducer from './reducers/episodesReducer';
import modalReducer from './reducers/modalReducer';
import cardsSaga from './sagas/cardsSaga';
import episodesSaga from './sagas/episodesSaga';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([...cardsSaga, ...episodesSaga]);
}

const rootReducer = combineReducers({
  cards: cardsReducer,
  modal: modalReducer,
  episodes: episodesReducer,
});

export type RootState = ReturnType<typeof rootReducer>

const createAppStore = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
  );
  sagaMiddleware.run(rootSaga);

  return store;
};

const store: Store = createAppStore();

export default store;
