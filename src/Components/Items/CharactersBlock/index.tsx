import React, {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Characters} from '../../../types/types';

const CharactersInfoBlock: FC<Characters> = ({image, name}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemImageContainer}>
        <Image style={styles.imageStyle} source={{uri: image}} />
      </View>
      <View style={styles.characterName}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    margin: 5,
    backgroundColor: 'rgba(151,216,237, 0.4)',
    borderRadius: 20,
  },
  imageStyle: {
    width: 160,
    height: 160,
    borderRadius: 100,
  },
  itemImageContainer: {
    width: 175,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  characterName: {
    width: '90%',
  },
  text: {
    textAlign: 'center',
  },
});

export default CharactersInfoBlock;
