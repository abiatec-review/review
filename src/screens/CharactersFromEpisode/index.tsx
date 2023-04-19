import React, { useEffect } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { getAdditional } from '../../redux/actions/additionalData/actions';
import { useDispatch } from 'react-redux';
import { Characters, ScreenProps } from '../../types/types';
import { setModalType } from '../../redux/actions/modals/actions';
import { CharactersInfoBlock } from '@components/index';
import { useAppSelector } from '../../hooks/useAppSelector';

const CharactersFromEpisode = ({
  route,
}: ScreenProps<'charactersFromEpisode'>) => {
  const { urlForGetCharactersFromSelectedEpisode } = route.params;
  const { charactersFromEpisode } = useAppSelector(
    store => store.AdditionalData,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdditional(urlForGetCharactersFromSelectedEpisode));
  }, [dispatch, urlForGetCharactersFromSelectedEpisode]);

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
    <View>
      <FlatList
        numColumns={2}
        data={charactersFromEpisode}
        renderItem={renderItem}
      />
    </View>
  );
};

// const styles = StyleSheet.create({});

export default CharactersFromEpisode;
