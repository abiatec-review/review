import axios from "axios";

const url = process.env.REACT_APP_API_URL

const instance = axios.create({
    baseURL: url,
    headers: {
        "Content-Type": "application/json",
      }
});

export const getFoundCharacters = async (name: string) => {
    const response = await instance.get(`character/`,{params:{
        name
    }})
    return response
}

export const getSelectEpisode = async (episode: string) => {
    const response = await instance.get(`episode/${episode}`)
    return response
}

export const getCharacterByIdApi = async (id: string) => {
    const response = await instance.get(`character/`, {params: 
        id
    })
    return response
}

export const getCharactersByPageApi = async (url: string) => {
    const response = await axios.get(url)
    return response
}

export const getCharactersByPageAndNameApi = async (name: string, page: string) => {
    const response = await instance.get(`character/`,{params: {page, name}})
    return response
}

export const getThreeRandomChars = async (episodes: number[]) => {
    return await Promise.all(episodes.map(async(ep: number) => {
        return await (instance.get(`character/${ep}`).then((data) => data.data))
    }))
}