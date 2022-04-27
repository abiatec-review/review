import * as React from 'react';
import {useState} from 'react';
import {FlatList} from 'react-native';
import {Character} from '../../utils/types';
import CharacterItem from './characterItem';

const Characters = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    return (
        <FlatList
            data={characters}
            renderItem={itemData => <CharacterItem />}
        />
    );
};
