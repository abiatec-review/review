import React, {useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getCharatersSucsess} from '../../../redux/actions/characters';
import CharactersInfoBlock from '../../Items/CharactersBlock';
import {Characters} from '../../../types/types';

const MainScreen = () => {
  const {
    CharactersReducer: {characters, charactersLoader},
  } = useSelector((CharactersReducer: any) => CharactersReducer);
  const dispatch = useDispatch();

  console.log('characters', characters);

  useEffect(() => {
    dispatch(getCharatersSucsess());
  }, [dispatch]);

  const renderItem = ({item}: {item: Characters}) => (
    <CharactersInfoBlock name={item.name} image={item.image} />
  );

  return (
    <View style={styles.mainScreenContainer}>
      {charactersLoader && (
        <FlatList
          numColumns={2}
          style={styles.flatlistContainer}
          data={characters}
          renderItem={renderItem}>
          keyExtractor={(item: Characters) => item.id}
        </FlatList>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainScreenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatlistContainer: {
    flex: 1,
    alignContent: 'space-around',
  },
});

export default MainScreen;
