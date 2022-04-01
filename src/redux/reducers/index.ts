import {combineReducers} from "redux"
import CharactersReducer from "./characters";


const createReducer = ()=> combineReducers({
    CharactersReducer
});

export default createReducer;
