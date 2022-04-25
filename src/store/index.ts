// eslint-disable-next-line camelcase
import { applyMiddleware, legacy_createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index';

const sagaMiddleware = createSagaMiddleware();

const store = legacy_createStore(rootReducer, applyMiddleware(sagaMiddleware));

export default store;