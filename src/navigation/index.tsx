import React from "react";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

import { CharactersScreen, EpisodesScreen, LocationsScreen } from "@screens";
import { Colors } from "@utils";

const Tab = createMaterialBottomTabNavigator();

function Navigation() {
  const icon = (name: string, color: string) => {
    return <Icon name={name} color={color} size={23} />;
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Characters"
        activeColor={Colors.RED}
        inactiveColor={Colors.BLACK}
        barStyle={{ backgroundColor: Colors.WHITE }}
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
