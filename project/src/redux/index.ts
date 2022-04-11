import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducers'
import { saga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const createSagaStore = () => {
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(saga);
    return store;
}

export const store = createSagaStore();