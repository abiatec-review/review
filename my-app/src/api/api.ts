import axios from "axios";

const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/',
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
        return await (await instance.get(`character/${ep}`)).data
    }))
}




















// class Api {
//     address: object;
//     options: any;
//     constructor(address: any) {
//         this.address = address; 
//     }

//     getCharacters(name :string) {
//         const query = `character/?name=${name}`
        
//     }


//     _get(query: any) {
//         return fetch(this._url(query))
//     }

//     _url(query: any) {
//         return `${this.address}/${query}`
//     }

//     _getResponse(res:any) {
//         if (res.ok) {
//             return res.json().then((j: any) => Promise.resolve(j))
//         } else {
//             return Promise.reject(`${res.status}`)
//         }
//     }
// }

// const api = new Api({
//     address: "https://rickandmortyapi.com/api/"
// })

// export { api }