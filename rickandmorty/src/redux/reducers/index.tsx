import charactersReducer from "./charReducer";
import {episodesReducer} from "./episodeReducer";
// @ts-ignore
import {combineReducers} from "redux";
// @ts-ignore
const rootReducer = combineReducers({
    characters: charactersReducer,
    episodes: episodesReducer
})

export default rootReducer;


