import React from 'react';
import { Image, ImageStyle } from 'react-native';
import { changeThemeMode } from '../../redux/actions/characters/actions';

export const helper = {
  changeThemeModeHandler: (themeMode: string) => {
    if (themeMode === 'light') {
      return require('@images/background/lightTheme.png');
    } else {
      return require('@images/background/rik_and_morty_theme_iPhoneX.jpeg');
    }
  },
  toggleSwitch: (themeMode: string, dispatch: any) => {
    if (themeMode === 'light') {
      dispatch(
        changeThemeMode({
          themeMode: 'dark',
        }),
      );
    } else {
      dispatch(
        changeThemeMode({
          themeMode: 'light',
        }),
      );
    }
  },
  tabIconSwitch: (routerType: string, style: ImageStyle) => {
    switch (routerType) {
      case 'LogIn': {
        return (
          <Image
            style={{ ...style }}
            source={require('@images/icons/green_portal.png')}
          />
        );
      }
      case 'Charters': {
        return (
          <Image
            style={style}
            source={require('@images/icons/Characters.png')}
          />
        );
      }
      case 'FavoriteCharaters': {
        return (
          <Image
            style={style}
            source={require('@images/icons/favorite.jpeg')}
          />
        );
      }
      default:
        return null;
    }
  },
};
