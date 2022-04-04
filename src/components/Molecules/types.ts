/* eslint-disable no-unused-vars */
export type cardData = {
    name: string;
    image: string
}

export interface ICard {
    data: cardData
}

export interface IInfoBlock {
    content: Object
}

export type TabNameType = {
    name: string,
    number: number,
    isActive:boolean
}

export interface ITabNames {
    tabsNames: Array<TabNameType>,
    clickHandler: (num: number)=>void
}

export interface IEpisodesBlock {
    episodeUrlsArray: Array<TabNameType>,
}
