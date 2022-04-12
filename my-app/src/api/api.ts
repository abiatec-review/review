import axios from "axios";

const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/',
    headers: {
        "Content-Type": "application/json",
      }
  });

  export const getFoundCharacters = async (name: string) => {
      const response = await instance.get(`character/?name=${name}`)
      return response
  }

  export const getSelectEpisode = async (episode: string) => {
      const response = await instance.get(`episode/${episode}`)
      return response
  }

  export const getCharacterByIdApi = async (id: any) => {
      const response = await instance.get(`character/${id}`)
      return response
  }

//   export const getData = async (url:string) =>{
//     return await axios.get(url)
//   }





















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