import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ImageBackground, Modal, StyleSheet, Switch } from 'react-native';
import {
  getCharatersSucsess,
  getFavoriteCharacters,
} from '../../redux/actions/characters/actions';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { helper } from './helper';
import ModalController from './ModalConroller';
import { identifyAuthUser } from '../../redux/actions/authentication/actions';
import { RootStackParamList, ScreenProps } from 'src/types/types';
import EpisodesList from '../EpisodesList';
import Home from './Home';
import CharactersFrom from '../CharactersFrom';
import CharactersFromEpisode from '../CharactersFromEpisode';

const NavigationComponent = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const dispatch = useDispatch();
  const {
    ModalReducer: { modalType },
  } = useSelector((ModalReducer: any) => ModalReducer);
  const {
    CharactersReducer: { themeMode },
  } = useSelector((CharactersReducer: any) => CharactersReducer);
  const {
    UserFaireBaseData: { faireBaseData },
  } = useSelector((UserFaireBaseData: any) => UserFaireBaseData);

  useEffect(() => {
    dispatch(getCharatersSucsess());
    dispatch(identifyAuthUser());
  }, [dispatch]);

  useEffect(() => {
    if (faireBaseData) {
      const favoriteCharacterIds = faireBaseData.map(
        ({ charId }: any) => charId,
      );
      dispatch(
        getFavoriteCharacters({ favoriteCharacters: favoriteCharacterIds }),
      );
    } else {
      dispatch(getFavoriteCharacters({ favoriteCharacters: [] }));
    }
  }, [dispatch, faireBaseData]);

  return (
    <>
      <Modal transparent={true} visible={!!modalType} animationType="fade">
        <ModalController modalType={modalType} />
      </Modal>

      <ImageBackground
        style={styles.mainScreenContainer}
        source={helper.changeThemeModeHandler(themeMode)}>
        <Stack.Navigator
          screenOptions={{
            headerTitleStyle: {
              color: themeMode !== 'light' ? 'white' : 'black',
            },
            headerStyle: {
              backgroundColor: themeMode === 'light' ? 'white' : 'black',
            },
            headerRight: () => {
              return (
                <Switch
                  trackColor={{ false: '#767577', true: '#81b0ff' }}
                  thumbColor={themeMode === 'light' ? '#f5dd4b' : '#f4f3f4'}
                  onValueChange={() => helper.toggleSwitch(themeMode, dispatch)}
                  value={themeMode === 'light'}
                />
              );
            },
          }}>
          <Stack.Screen
            name={'Home'}
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={'episodesList'}
            component={EpisodesList}
            options={{ title: 'Episodes List' }}
          />
          <Stack.Screen
            name={'charactersFrom'}
            component={CharactersFrom}
            options={({ route }: ScreenProps<'charactersFrom'>) => ({
              title: `Characters From ${route.params.locationName}`,
            })}
          />
          <Stack.Screen
            name={'charactersFromEpisode'}
            component={CharactersFromEpisode}
            options={({ route }: any) => ({
              title: `Characters From Episode # ${route.params.episodeNum}`,
            })}
          />
        </Stack.Navigator>
      </ImageBackground>
    </>
  );
};

export default NavigationComponent;
const styles = StyleSheet.create({
  mainScreenContainer: {
    height: '100%',
  },
});
