import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  getCharatersSucsess,
  getNextCharatersSucsess,
} from '../../../redux/actions/characters';
import CharactersInfoBlock from '../../Items/CharactersBlock';
import {Characters} from '../../../types/types';

const MainScreen = () => {
  const {
    CharactersReducer: {characters, nextCharactersPage, charactersLoader},
  } = useSelector((CharactersReducer: any) => CharactersReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharatersSucsess());
  }, [dispatch]);
  // https://stackoverflow.com/questions/56972415/useeffect-dependency-array-and-eslint-exhaustive-deps-rule

  const renderItem = ({item}: {item: Characters}) => (
    <CharactersInfoBlock name={item.name} id={item.id} image={item.image} />
  );

  return (
    // <ImageBackground
    //   style={styles.mainScreenContainer}
    //   source={require('../../../assets/images/bacground/rik_and_morty_theme_iPhoneX.jpeg')}>
    <View style={styles.mainScreenContainer}>
      <FlatList
        ListFooterComponent={charactersLoader ? <Text>Loading</Text> : null}
        onEndReached={() => {
          if (charactersLoader) {
            dispatch(getNextCharatersSucsess({nextCharactersPage}));
          }
        }}
        numColumns={2}
        style={styles.flatListContainer}
        data={characters}
        renderItem={renderItem}>
        keyExtractor={(item: Characters) => item.id}
      </FlatList>
    </View>
    // </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mainScreenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  flatListContainer: {
    flex: 1,
    alignContent: 'space-around',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default MainScreen;
