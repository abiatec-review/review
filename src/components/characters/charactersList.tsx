import * as React from 'react';
import {useState, useEffect} from 'react';
import {FlatList} from 'react-native';

import {Character} from '@utils/types';
import CharacterItem from './characterItem';
import {getAllCharacters} from '@api/services/Character';

const CharacterList = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    useEffect(() => {
        getAllCharacters().then(characters => setCharacters(characters));
    }, []);
    return (
        <FlatList
            data={characters}
            renderItem={itemData => <CharacterItem item={itemData.item} />}
            keyExtractor={item => String(item.id)}
        />
    );
};
export default CharacterList;
