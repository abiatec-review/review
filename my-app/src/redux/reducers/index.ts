import { combineReducers } from "redux";
import CharactersReducer from "./characters";

const createRootReducer = () => combineReducers({
    characters: CharactersReducer
})

export default createRootReducer