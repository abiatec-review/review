import { combineReducers } from "redux";
import CharactersReducer from "./characters";
import EpisodeReducer from "./episode";
import ModalTypeReducer from "./modalType";

const createRootReducer = () => combineReducers({
    characters: CharactersReducer,
    episode: EpisodeReducer,
    modalType: ModalTypeReducer
})

export default createRootReducer