import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Characters } from '../../../types/types';

export const CharactersInfoBlock = ({ image, name }: Characters) => {
  return (
    <View style={styles.itemContainer}>
      <Image style={styles.imageStyle} source={{ uri: image }} />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor: 'rgba(151,216,237, 0.4)',
    borderRadius: 20,
    padding: 10,
  },
  imageStyle: {
    width: 160,
    height: 160,
    borderRadius: 100,
  },
  text: {
    maxWidth: 120,
    textAlign: 'center',
  },
});
