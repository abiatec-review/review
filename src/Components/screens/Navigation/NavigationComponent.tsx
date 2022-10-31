import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  ImageBackground,
  Modal,
  StyleSheet,
  Switch,
  useColorScheme,
} from 'react-native';
import {
  changeThemeMode,
  getCharatersSucsess,
} from '../../../redux/actions/characters';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EpisodesList from '../EpisodesList';
import CharactersFromEpisode from '../CharactersFromEpisode';
import Home from './Home';
import CharacterFullInfo from '../../ModalsComponents/CharacterFullInfo';
import CharactersFrom from '../CharactersFrom';

const NavigationComponent = () => {
  const Stack = createNativeStackNavigator();
  const [isEnabled, setIsEnabled] = useState(false);
  const dispatch = useDispatch();
  const {
    ModalReducer: {modalType},
  } = useSelector((ModalReducer: any) => ModalReducer);
  const {
    CharactersReducer: {themeMode},
  } = useSelector((CharactersReducer: any) => CharactersReducer);

  useEffect(() => {
    dispatch(getCharatersSucsess());
  }, [dispatch]);

  const changeThemeModeHandler = () => {
    if (themeMode === 'light') {
      return require('../../../assets/images/bacground/lightTheme.png');
    } else {
      return require('../../../assets/images/bacground/rik_and_morty_theme_iPhoneX.jpeg');
    }
  };

  const toggleSwitch = () => {
    if (isEnabled) {
      setIsEnabled(prevState => !prevState);
      dispatch(
        changeThemeMode({
          themeMode: 'dark',
        }),
      );
    } else {
      setIsEnabled(prevState => !prevState);
      dispatch(
        changeThemeMode({
          themeMode: 'light',
        }),
      );
    }
  };

  return (
    <>
      {modalType ? (
        <Modal transparent={true} style={{zIndex: -1}}>
          <CharacterFullInfo />
        </Modal>
      ) : null}
      <ImageBackground
        style={styles.mainScreenContainer}
        source={changeThemeModeHandler()}>
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
                  trackColor={{false: '#767577', true: '#81b0ff'}}
                  thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              );
            },
          }}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name={'episodesList'}
            component={EpisodesList}
            options={{title: 'Episodes List'}}
          />

          <Stack.Screen
            name={'charactersFromEpisode'}
            component={CharactersFromEpisode}
            options={({route}: any) => ({
              title: `Characters From Episode # ${route.params.episodeNum}`,
            })}
          />
          <Stack.Screen
            name={'charactersFrom'}
            component={CharactersFrom}
            options={({route}: any) => ({
              title: `Characters From ${route.params.locationName}`,
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
