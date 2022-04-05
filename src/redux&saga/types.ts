export type IAction = {
    type: string,
    payload: undefined | number | string
}

export type IEpisodesAction = {
    type: string,
    payload: Array<string>
}

export type IEpisode = {
    characters: Array<string>,
    name: string,
    episode: string,
    url: string,
    id: number,
    image: 'string'
}

export type IEpisodesResponse = {
    status: string,
    value: IEpisode
}

// export type ICharResponse =
// {

// }
