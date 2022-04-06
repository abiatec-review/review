import { put, call, all } from 'redux-saga/effects';
import { ActionType as Action, EpisodesInfoType, StringsKeysObjectInterface } from 'types';
import api from 'services/api';
import { setDetails, setIsLoaded, setLoadedWithError } from 'redux/actions/details';



const fetchPicturesInfo = async (episodes: string[]) => {
    const episodesPromises = episodes.map((episode: string) => api.get(episode));


    const { charactersList, episodesInfo } = await Promise.all(episodesPromises).then((values) => {
        const episodesInfo: StringsKeysObjectInterface<EpisodesInfoType> = {};
        const episodesInfoList = values.map(({ data }) => {
            const { url, name, air_date, characters } = data;

            episodesInfo[url] = {
                url,
                name,
                date: air_date,
                characters: characters.slice(0, 3)
            };

            return data;
        });

        const charactersList: string[] = Array.from(new Set(episodesInfoList.reduce((acc, episode) => {
            return acc.concat(episode.characters.slice(0, 3));
        }, [])));

        return { charactersList, episodesInfo }

    });

    const charactersPictures = await fetchCharactersPictures(charactersList);

    return { charactersPictures, episodesInfo };

}

const fetchCharactersPictures = async (charactersList: string[]) => {

    const charactersPictures: StringsKeysObjectInterface<string> = {};
    const charactersPicturesPromises = charactersList.map((char: string) => api.get(char));

    return Promise.all(charactersPicturesPromises).then((values) => {
        values.forEach(({ data }) => {
            charactersPictures[data.url] = data.image;
            return data;
        });
        return charactersPictures;
    });
}


export function* fetchPictureDetails(action: Action) {
    try {
        const episodes: string[] = action.payload;

        const data: {
            charactersPictures: StringsKeysObjectInterface<string>,
            episodesInfo: StringsKeysObjectInterface<EpisodesInfoType>
        } = yield call(fetchPicturesInfo, episodes);

        yield all([
            put(setDetails(data)),
            put(setIsLoaded(true)),
        ]);

    } catch {
        yield put(setLoadedWithError(true));
    }
}