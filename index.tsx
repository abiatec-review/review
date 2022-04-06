import React from "react";

import { AppRegistry } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";

import Navigation from "@navigation";
import store from "@redux/store";

import { name } from "./app.json";

const App = () => (
  <Provider store={store}>
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  </Provider>
);

AppRegistry.registerComponent(name, () => App);
