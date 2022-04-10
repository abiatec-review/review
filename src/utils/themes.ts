import { Colors } from "@utils";

interface Theme {
  navbar: string;
  navbarIcon: {
    active: string;
    inactive: string;
  };
}

export const LightTheme: Theme = {
  navbar: Colors.WHITE,
  navbarIcon: {
    active: Colors.RED,
    inactive: Colors.BLACK
  }
};

export const DarkTheme: Theme = {
  navbar: Colors.BLACK,
  navbarIcon: {
    active: Colors.CYAN,
    inactive: Colors.WHITE
  }
};
