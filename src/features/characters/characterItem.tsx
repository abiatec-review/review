import {Character} from '@utils/types';
import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface CharacterItemProps {
    item: Character;
}

const CharacterItem = ({item}: CharacterItemProps) => {
    return (
        <View style={styles.characterItem}>
            <Text style={styles.characterText}>{item.name}</Text>
        </View>
    );
};

export default CharacterItem;

const styles = StyleSheet.create({
    characterItem: {
        borderRadius: 6,
        fontSize: 25,
        margin: 8,
        backgroundColor: '#5e0acc',
    },
    characterText: {
        color: 'white',
        padding: 8,
    },
});
