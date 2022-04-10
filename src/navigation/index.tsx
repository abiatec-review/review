import React from "react";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer, DefaultTheme, Theme } from "@react-navigation/native";
import { ImageBackground, Platform, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { useTheme } from "@hooks";
import { CharactersScreen, EpisodesScreen, LocationsScreen } from "@screens";
import { Colors, Indent } from "@utils";

const Tab = createMaterialBottomTabNavigator();

function Navigation() {
  const icon = (name: string, color: string) => {
    return <Icon name={name} color={color} size={23} />;
  };

  const { colors } = useTheme();
  const { navbar, navbarIcon } = colors;

  const theme: Theme = {
    ...DefaultTheme,
    colors: { ...DefaultTheme.colors, background: "transparent" }
  };

  return (
    <NavigationContainer theme={theme}>
      <ImageBackground
        blurRadius={5}
        style={{ height: "100%" }}
        source={require("@assets/background.jpeg")}
      >
        <Tab.Navigator
          initialRouteName="Characters"
          activeColor={navbarIcon.active}
          inactiveColor={navbarIcon.inactive}
          barStyle={[style.bar, { backgroundColor: navbar }]}
        >
          <Tab.Screen
            name="Characters"
            component={CharactersScreen}
            options={{
              tabBarLabel: "Characters",
              tabBarIcon: ({ color }) => icon("group", color)
            }}
          />
          <Tab.Screen
            name="Locations"
            component={LocationsScreen}
            options={{
              tabBarLabel: "Locations",
              tabBarIcon: ({ color }) => icon("photo", color)
            }}
          />
          <Tab.Screen
            name="Episodes"
            component={EpisodesScreen}
            options={{
              tabBarLabel: "Episodes",
              tabBarIcon: ({ color }) => icon("video-camera", color)
            }}
          />
        </Tab.Navigator>
      </ImageBackground>
    </NavigationContainer>
  );
}

export default Navigation;

const baseStyles = StyleSheet.create({
  bar: {
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowColor: Colors.BLACK
  }
});

const style = StyleSheet.create({
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
