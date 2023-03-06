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
};
