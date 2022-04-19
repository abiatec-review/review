import { regExps } from "./constants"

export const selectEpisode = (url: string) => {
    return url.replace(regExps.getDigital, '')
}

