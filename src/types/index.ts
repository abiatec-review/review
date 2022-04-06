export type StoreType = {
    pictures: PictureType[],
    info: StateInfoType,
    details: any
}
export type PictureType = {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: {
        name: string,
        url: string
    },
    location: {
        name: string,
        url: string
    },
    image: string,
    episode: string[],
    url: string,
    created: string
}

export type ActionType = {
    type: string,
    payload?: any
}

export type StateInfoType = {
    count: number,
    pages: number | null,
    next: string | null,
    prev: string | null
}


export type EpisodesInfoType = {
    url: string,
    name: string,
    date: string,
    characters: string[]
}

export type StringsKeysObjectInterface<T> = { [key: string]: T }



export type StateDetailsType = {
    isLoaded: boolean,
    loadedWithError: boolean,
    charactersPictures: StringsKeysObjectInterface<string>,
    episodesInfo: StringsKeysObjectInterface<EpisodesInfoType>
}

