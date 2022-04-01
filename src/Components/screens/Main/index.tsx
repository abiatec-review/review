import React, {useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getCharatersSucsess} from '../../../redux/actions/characters';
import CharactersInfoBlock from '../../Items/CharactersBlock';
import {Characters} from '../../../types/types';

const MainScreen = () => {
  const {
    CharactersReducer: {characters, charactersLoder},
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
      <Text>Main Screen</Text>
      {charactersLoder && (
        <FlatList data={characters} renderItem={renderItem}>
          keyExtractor={(item: Characters) => item.id}
        </FlatList>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainScreenContainer: {
    height: '100%',
  },
});

export default MainScreen;
