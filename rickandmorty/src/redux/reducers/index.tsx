import charactersReducer from "./charReducer";
import {episodesReducer} from "./episodeReducer";
// @ts-ignore
import {combineReducers} from "redux";
import {authReducer} from "./authReducer";

// @ts-ignore
const rootReducer = combineReducers({
    characters: charactersReducer,
    episodes: episodesReducer,
    authentication: authReducer
})

export default rootReducer;
export type RootReducer = ReturnType<typeof rootReducer>


