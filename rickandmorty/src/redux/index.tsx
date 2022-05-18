//@ts-ignore
import { applyMiddleware } from "redux";
//@ts-ignore
import { createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import  rootReducer  from "./reducers";
import rootSaga from "./sagas";
import thunk from 'redux-thunk';


const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk,sagaMiddleware];

const composeEnhancers =
    typeof window === 'object' &&
    //@ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga);

export default store;

