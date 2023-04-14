import { CharactersInfoBlock } from '@components/index';
import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setModalType } from '../../redux/actions/modals/modal';
import { Characters } from '../../types/types';

const FavoriteCharacters = () => {
  const {
    CharactersReducer: { favoriteCharacters, favoriteCharactersLoader },
  } = useSelector((CharactersReducer: any) => CharactersReducer);
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
