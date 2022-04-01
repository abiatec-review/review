import React, {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Characters} from '../../../types/types';

const CharactersInfoBlock: FC<Characters> = ({image, name}) => {
  return (
    <View style={styles.mainScreenContainer}>
      <Image style={{width: 120, height: 120, borderRadius: 100,}} source={{uri: image}} />
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainScreenContainer: {
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CharactersInfoBlock;
