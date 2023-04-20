import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { helper } from './helper';
import { useDispatch } from 'react-redux';
import { CharacterLocation } from 'src/types/types';
import { setModalType } from '../../redux/modals/actions';
import { useNavigation } from '@react-navigation/native';

export type TableTypes = {
  objectParse: CharacterLocation | null;
};

export const Table = ({ objectParse }: TableTypes) => {
  const navigation: any = useNavigation();
  let objToArr;

  if (objectParse) {
    objToArr = Object.entries(objectParse).map(([key, value]) => ({
      [key]: value,
    }));
  }

  const dispatch = useDispatch();

  const onNavigateToEpisodesList = (
    screenName: 'episodesList',
    value: { episodes: string[] },
  ) => {
    navigation.navigate(screenName, value);
    dispatch(setModalType({ modalType: '', modalData: null }));
  };

  const onNavigateToCharactersFrom = (
    screenName: 'charactersFrom',
    value: { name: string; url: string },
  ) => {
    navigation.navigate(screenName, value);
    dispatch(setModalType({ modalType: '', modalData: null }));
  };

  return (
    <View>
      {objToArr?.map((item, id) => {
        if (
          Object.values(item)[0] !== '' &&
          Object.keys(item)[0] !== 'url' &&
          // Object.values(item)[0].name !== 'unknown' &&
          Object.values(item)[0] !== 'unknown'
        ) {
          return (
            <View key={id} style={styles.itemsInTable}>
              <Text>{Object.keys(item)[0].toUpperCase()}:</Text>
              {helper.typeIdentifier(
                Object.values(item)[0],
                onNavigateToEpisodesList,
                onNavigateToCharactersFrom,
              )}
            </View>
          );
        }
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  itemsInTable: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    alignItems: 'center',
    zIndex: -1,
  },
});
