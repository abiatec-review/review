import { CharactersInfoBlock } from '@components/index';
import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/useAppSelector';
import { setModalType } from '../../redux/actions/modals/actions';
import { Characters } from '../../types/types';

const FavoriteCharacters = () => {
  const { favoriteCharacters, favoriteCharactersLoader } = useAppSelector(
    store => store.CharactersReducer,
  );
  const dispatch = useDispatch();

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
    <View style={styles.mainScreenContainer}>
      <FlatList
        ListFooterComponent={
          favoriteCharactersLoader ? <Text>Loading</Text> : null
        }
        numColumns={2}
        style={styles.flatListContainer}
        data={favoriteCharacters}
        renderItem={renderItem}
      />
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
  flatListContainer: {
    flex: 1,
    alignContent: 'space-around',
  },
});

export default FavoriteCharacters;
