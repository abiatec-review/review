import React from "react";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { useTheme } from "@hooks";
import { CharactersScreen, EpisodesScreen, LocationsScreen } from "@screens";

const Tab = createMaterialBottomTabNavigator();

function Navigation() {
  const icon = (name: string, color: string) => {
    return <Icon name={name} color={color} size={23} />;
  };

  const { colors } = useTheme();
  const { navbar, navbarIcon, shadow } = colors;

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Characters"
        activeColor={navbarIcon.active}
        inactiveColor={navbarIcon.inactive}
        barStyle={[style.bar, { backgroundColor: navbar, shadowColor: shadow }]}
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
    </NavigationContainer>
  );
}

export default Navigation;

const style = StyleSheet.create({
  bar: {
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10
  }
});
