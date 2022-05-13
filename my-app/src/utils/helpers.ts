import { regExps } from "./constants"

export const selectEpisode = (url: string) => {
    return url.replace(regExps.getDigital, '')
}

export const getCharEpisode = (targetChar: any) => {
    return Number(targetChar.episode[0].split('/').slice(-1))
}
