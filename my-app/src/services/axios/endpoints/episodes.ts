import {instance} from "../index";

export const episodesService = {
    getSelectEpisode: (episode: string) => instance.get(`episode/${episode}`)
}
