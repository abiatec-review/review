import charactersReducer from "./charReducer";
//@ts-ignore

import {combineReducers} from "redux";

//@ts-ignore
const rootReducer = combineReducers({
    characters: charactersReducer
})

export default rootReducer;


