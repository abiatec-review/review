import React from 'react';
import {Image, ImageStyle} from 'react-native';
import {changeThemeMode} from '../../../redux/actions/characters';

export const helper = {
  changeThemeModeHandler: (themeMode: string) => {
    if (themeMode === 'light') {
      return require('../../../assets/images/bacground/lightTheme.png');
    } else {
      return require('../../../assets/images/bacground/rik_and_morty_theme_iPhoneX.jpeg');
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
            style={{...style}}
            source={require('../../../assets/images/icons/green_portal.png')}
          />
        );
      }
      case 'Charters': {
        return (
          <Image
            style={{...style}}
            source={require('../../../assets/images/icons/Characters.png')}
          />
        );
      }
      case 'FavoriteCharaters': {
        return (
          <Image
            style={style}
            source={require('../../../assets/images/icons/favorite.jpeg')}
          />
        );
      }
      default:
        return null;
    }
  },
};
