import React, {useState} from 'react';
import {Provider, useDispatch, useSelector} from 'react-redux';
import configureStore from '../redux/store';
import MainScreen from './screens/Main';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FavoriteCharacters from './screens/FavoriteCharacters';
import {Button, Image, ImageBackground, StyleSheet, Switch} from 'react-native';
import {changeThemeMode} from '../redux/actions/characters';

const store = configureStore();

const NavigationComponent = () => {
  const {
    CharactersReducer: {themeMode},
  } = useSelector((CharactersReducer: any) => CharactersReducer);
  const Tab = createBottomTabNavigator();
  const [isEnabled, setIsEnabled] = useState(false);

  const dispatch = useDispatch();
  const changeThemeModeHandler = () => {
    if (themeMode === 'light') {
      return require('../assets/images/bacground/lightTheme.png');
    } else {
      return require('../assets/images/bacground/rik_and_morty_theme_iPhoneX.jpeg');
    }
  };

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
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
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <ImageBackground
          style={styles.mainScreenContainer}
          source={changeThemeModeHandler()}>
          <Tab.Navigator
            screenOptions={({route}: any) => ({
              tabBarIcon: () => {
                if (route.name === 'LogIn') {
                  return (
                    <Image
                      style={{width: 25, height: 25}}
                      source={require('../assets/images/icons/green_portal.png')}
                    />
                  );
                }
                if (route.name === 'Charters') {
                  return (
                    <Image
                      style={{width: 25, height: 25}}
                      source={require('../assets/images/icons/Characters.png')}
                    />
                  );
                }
                if (route.name === 'FavoriteCharaters') {
                  return (
                    <Image
                      style={{width: 25, height: 25}}
                      source={require('../assets/images/icons/favorite.jpeg')}
                    />
                  );
                }
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
              tabBarActiveBackgroundColor: 'rgba(151,216,237, 0.4)',
            })}>
            <Tab.Screen
              name="Charters"
              component={MainScreen}
              options={{
                headerRight: () => (
                  <Switch
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  />
                ),
                title: 'Charters',
                headerStyle: {
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                },
                tabBarStyle: {
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                },
              }}
            />
            <Tab.Screen
              name="FavoriteCharaters"
              component={FavoriteCharacters}
              options={{
                title: 'Favorite Charaters',
                headerStyle: {
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                },
                tabBarStyle: {
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                },
              }}
            />
            <Tab.Screen
              name="LogIn"
              component={FavoriteCharacters}
              options={{
                title: 'Log in',
                headerStyle: {
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                },
                tabBarStyle: {
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                },
              }}
            />
          </Tab.Navigator>
        </ImageBackground>
      </NavigationContainer>
    </Provider>
  );
};

export default NavigationComponent;

const styles = StyleSheet.create({
  mainScreenContainer: {
    height: '100%',
  },
});
