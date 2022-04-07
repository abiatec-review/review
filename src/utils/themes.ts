import { Colors } from "@utils";

interface Theme {
  navbar: string;
  shadow: string;
  navbarIcon: {
    active: string;
    inactive: string;
  };
}

export const LightTheme: Theme = {
  navbar: Colors.WHITE,
  shadow: Colors.BLACK,
  navbarIcon: {
    active: Colors.RED,
    inactive: Colors.BLACK
  }
};

export const DarkTheme: Theme = {
  navbar: Colors.BLACK,
  shadow: Colors.CYAN_LIGHT,
  navbarIcon: {
    active: Colors.CYAN,
    inactive: Colors.WHITE
  }
};
