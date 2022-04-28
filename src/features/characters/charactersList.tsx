import * as React from 'react';
import {useState, useEffect} from 'react';
import {FlatList} from 'react-native';

import {Character} from '@utils/types';
import CharacterItem from './characterItem';
import {API_ENDPOINT} from '@utils/consts';

const characterEndpoint = API_ENDPOINT + '/character';

const CharacterList = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    useEffect(() => {
        const getAllCharacters = async () => {
            const res = await fetch(characterEndpoint);
            const data = await res.json();
            setCharacters(data.results);
        };
        getAllCharacters().catch(console.error);
    }, []);
    return (
        <FlatList
            data={characters}
            renderItem={itemData => {
                return <CharacterItem item={itemData.item} />;
            }}
            keyExtractor={item => String(item.id)}
        />
    );
};
export default CharacterList;
