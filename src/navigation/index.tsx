import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { ImageBackground, Platform, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { useTheme } from "@hooks";
import { CharactersScreen, EpisodesScreen, LocationsScreen, LoginScreen } from "@screens";
import { Color, Indent, Screen } from "@utils";

const Tab = createBottomTabNavigator();

function Navigation() {
  const icon = (route: Screen, color: string) => {
    let name = "";
    if (route === Screen.CHARACTERS) name = "group";
    else if (route === Screen.LOCATIONS) name = "photo";
    else if (route === Screen.EPISODES) name = "video-camera";
    else return;
    return <Icon name={name} color={color} size={23} />;
  };

  const { colors } = useTheme();
  const { navbar, navbarIcon } = colors;

  return (
    <NavigationContainer>
      <ImageBackground
        blurRadius={5}
        style={{ height: "100%" }}
        source={require("@assets/background.jpeg")}
      >
        <Tab.Navigator
          initialRouteName={Screen.LOGIN}
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
