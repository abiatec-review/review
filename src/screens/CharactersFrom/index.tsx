import React, { useEffect } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { Characters, ScreenProps } from '../../types/types';
import { CharactersInfoBlock } from '@components/index';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getAdditional } from '../../redux/additionalData/actions';
import { setModalType } from '../../redux/modals/actions';

const CharactersFrom = ({ route }: ScreenProps<'charactersFrom'>) => {
  const { url } = route.params;
  const { charactersFromLocation } = useAppSelector(
    store => store.AdditionalData,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdditional(url));
  }, [dispatch, url]);

  const renderItem = ({ item }: { item: Characters }) => (
    <TouchableOpacity
      onPress={() => {
        dispatch(
          setModalType({ modalType: 'characterFullInfo', modalData: item }),
        );
      }}>
      <CharactersInfoBlock name={item.name} id={item.id} image={item.image} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {charactersFromLocation?.length ? (
        <FlatList
          numColumns={2}
          data={charactersFromLocation}
          renderItem={renderItem}
        />
      ) : (
        <Text style={styles.errorText}>No characters</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
  },
});

export default CharactersFrom;
