import { Switch } from 'react-native';
import MainScreen from '../Main';
import FavoriteCharacters from '../FavoriteCharacters';
import React, { useState } from 'react';
import { changeThemeMode } from '../../redux/actions/characters/actions';
import { useDispatch, useSelector } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LogIn from '../Auth';
import UserProfile from '../UserProfile';
import { helper } from './helper';
import { CustomImage } from '@components/index';

const Home = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const {
    Authentication: { userName, userAvatar },
  } = useSelector((Authentication: any) => Authentication);
  const Tab = createBottomTabNavigator();
  const dispatch = useDispatch();
  const {
    CharactersReducer: { themeMode },
  } = useSelector((CharactersReducer: any) => CharactersReducer);

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
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () =>
          helper.tabIconSwitch(route.name, { width: 25, height: 25 }),
        headerRight: () => {
          return (
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          );
        },
        tabBarActiveBackgroundColor: 'rgba(151,216,237, 0.4)',
        headerTitleStyle: {
          color: themeMode !== 'light' ? 'white' : 'black',
        },
        headerStyle: {
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          backgroundColor: themeMode === 'light' ? 'white' : 'black',
        },
        tabBarStyle: {
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          backgroundColor: themeMode === 'light' ? 'white' : 'black',
        },
        headerLeft: () => {
          return (
            <>
              {userAvatar && (
                <CustomImage
                  imageUri={userAvatar}
                  imageBorderRadius={50}
                  isButtonNeed={false}
                  buttonText={'+'}
                  handleOnPressInImage={null}
                  width={35}
                  height={35}
                />
              )}
            </>
          );
        },
      })}>
      <Tab.Screen
        name="Charters"
        component={MainScreen}
        options={{
          headerRight: () => (
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          ),
          title: 'Charters',
          tabBarItemStyle: {
            borderTopLeftRadius: 10,
          },
        }}
      />

      <Tab.Screen
        name="FavoriteCharaters"
        component={FavoriteCharacters}
        options={{
          title: 'Favorite Charaters',
        }}
      />
      <Tab.Screen
        name="LogIn"
        component={userName ? UserProfile : LogIn}
        options={{
          title: userName ? 'Profile' : 'Autorization',
          tabBarItemStyle: {
            borderTopRightRadius: 10,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;
