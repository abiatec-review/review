import React, { useEffect } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { getAdditional } from '../../redux/actions/additionalData/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Characters, CharactersFromProps } from '../../types/types';
import { setModalType } from '../../redux/actions/modals/modal';
import { CharactersInfoBlock } from '@components/index';

const CharactersFrom = ({ route }: CharactersFromProps) => {
  const { locationCharactersApi } = route.params;
  const {
    AdditionalData: { characterFromLocation },
  } = useSelector((AdditionalData: any) => AdditionalData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdditional(locationCharactersApi));
  }, [dispatch, locationCharactersApi]);

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
      {characterFromLocation?.length ? (
        <FlatList
          numColumns={2}
          data={characterFromLocation}
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
