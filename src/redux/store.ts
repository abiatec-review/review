import { createStore, compose, applyMiddleware } from 'redux'

import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';

const initialState = {
  currentImages: [],
  info:{}
};



function reducer(state:any = {}, action: any) {
  console.log(action.type);
  switch (action.type) {
    case 'setImages': {
      return {...state, currentImages: action.payload.results, info: action.payload.info }
    }
    case 'addImages': {
      return {...state, currentImages: [...state.currentImages, ...action.payload.results], info: action.payload.info }
    }
    default:
      return state
  }
}
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}



const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState,composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default  store