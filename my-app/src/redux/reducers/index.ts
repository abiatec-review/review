import { combineReducers } from "redux";
import CharactersReducer from "./characters";
import EpisodeReducer from "./episode";
import ModalTypeReducer from "./modalType";
import AuthReducer from "./auth";

const createRootReducer = () => combineReducers({
    characters: CharactersReducer,
    episode: EpisodeReducer,
    modalType: ModalTypeReducer,
    auth: AuthReducer
})

export default createRootReducer