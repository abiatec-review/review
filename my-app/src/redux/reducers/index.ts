import { combineReducers } from "redux";
import CharactersReducer from "./characters";
import EpisodeReducer from "./episode";

const createRootReducer = () => combineReducers({
    characters: CharactersReducer,
    episode: EpisodeReducer
})

export default createRootReducer