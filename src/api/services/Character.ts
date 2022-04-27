import {OpenCameraDialogOptions} from 'react-native';
import {API_ENDPOINT} from '@utils/consts';
import {Character} from '@utils/types';

const characterEndpoint = API_ENDPOINT + '/character';

export const getAllCharacters = async () => {
    const res = await fetch(characterEndpoint);
    if (!res.ok) throw new Error(`${res.status},${res.statusText}`);
    const data = await res.json();
    return data.results as Character[];
};
