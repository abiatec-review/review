import React, { useEffect } from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import { ImageBackground, Platform, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { useTheme } from "@hooks";
import { setUser } from "@redux/services";
import { useDispatch } from "@redux/store";
import {
  CharactersScreen,
  EpisodesScreen,
  LocationsScreen,
  LoginScreen,
  ProfileScreen
} from "@screens";
import { Color, getUser, Indent, onAuthStateChanged, Screen } from "@utils";

const Tab = createBottomTabNavigator();

type RootTabParams = { [key in Screen]: undefined };

function Navigation() {
  const icon = (route: Screen, color: string) => {
    let name = "";
    if (route === Screen.CHARACTERS) name = "group";
    else if (route === Screen.LOCATIONS) name = "photo";
    else if (route === Screen.EPISODES) name = "video-camera";
    else if (route === Screen.PROFILE) name = "user";
    else return;
    return <Icon name={name} color={color} size={23} />;
  };

  const { colors } = useTheme();
  const { navbar, navbarIcon } = colors;

  const navigationRef = useNavigationContainerRef<RootTabParams>();
  const dispatch = useDispatch();
  useEffect(() => {
    const { navigate } = navigationRef;
    const unsubscribe = onAuthStateChanged((user) => {
      dispatch(setUser(getUser()));
      navigate(user ? Screen.CHARACTERS : Screen.LOGIN);
    });

    return unsubscribe;
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <ImageBackground
        blurRadius={5}
        style={{ height: "100%" }}
        source={require("@assets/background.jpeg")}
      >
        <Tab.Navigator
          sceneContainerStyle={{ backgroundColor: Color.NONE }}
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: navbarIcon.active,
            tabBarInactiveTintColor: navbarIcon.inactive,
            tabBarIcon: ({ color }) => icon(route.name as Screen, color),
            tabBarStyle: { backgroundColor: navbar, ...style.bar }
          })}
        >
          <Tab.Screen
            name={Screen.LOGIN}
            component={LoginScreen}
            options={{ tabBarItemStyle: { display: "none" }, tabBarStyle: { display: "none" } }}
          />
          <Tab.Screen name={Screen.CHARACTERS} component={CharactersScreen} />
          <Tab.Screen name={Screen.LOCATIONS} component={LocationsScreen} />
          <Tab.Screen name={Screen.EPISODES} component={EpisodesScreen} />
          <Tab.Screen name={Screen.PROFILE} component={ProfileScreen} />
        </Tab.Navigator>
      </ImageBackground>
    </NavigationContainer>
  );
}

export default Navigation;

const baseStyles = StyleSheet.create({
  bar: {
    shadowOpacity: 1,
    shadowColor: Color.BLACK,
    shadowRadius: Indent.DEFAULT,
    shadowOffset: { width: 0, height: 0 }
  },
  loader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.TRANSPARENT_DARK
  }
});

const style = StyleSheet.create({
  ...baseStyles,
  bar: {
    ...Platform.select({
      ios: {
        ...baseStyles.bar
      },
      android: {
        ...baseStyles.bar,
        elevation: Indent.HUGE
      }
    })
  }
});
