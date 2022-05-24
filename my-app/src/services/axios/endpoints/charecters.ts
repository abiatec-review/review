import {instance} from "../index";
import axios from "axios";

export const charactersService = {
    getThreeRandomChars: async (episodes: number[]) => {
    return await Promise.all(episodes.map(async(ep: number) => {
        return await (instance.get(`character/${ep}`).then((data) => data.data))
    }))
},
    getFoundCharacters: (name: string) => instance.get(`character/`, {params: {name}}),
    getCharacterByIdApi: (id: string) => instance.get(`character/`, {params: id}),
    getCharactersByPageApi: (url: string) => axios.get(url),
    getCharactersByPageAndNameApi: (name: string, page: string) => instance.get(`character/`, {params: {page, name}}),
}

