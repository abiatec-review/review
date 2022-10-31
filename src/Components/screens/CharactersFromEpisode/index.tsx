import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {getAdditional} from '../../../redux/actions/getAdditional';
import {useDispatch, useSelector} from 'react-redux';
import {Characters} from '../../../types/types';
import {setModalType} from '../../../redux/actions/modal';
import CharactersInfoBlock from '../../Items/CharactersBlock';

const CharactersFromEpisode = ({route}: any) => {
  const {urlForGetCharactersFromSelectedEpisode} = route.params;
  const {
    AdditionalData: {charactersFromEpisode},
  } = useSelector((AdditionalData: any) => AdditionalData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdditional(urlForGetCharactersFromSelectedEpisode));
  }, [dispatch, urlForGetCharactersFromSelectedEpisode]);

  const renderItem = ({item}: {item: Characters}) => (
    <TouchableOpacity
      onPress={() => {
        dispatch(
          setModalType({modalType: 'characterFullInfo', modalData: item}),
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

const styles = StyleSheet.create({});

export default CharactersFromEpisode;
