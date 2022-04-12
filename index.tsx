import React from "react";

import { AppRegistry, StatusBar } from "react-native";
import { Provider } from "react-redux";

import Navigation from "@navigation";
import store from "@redux/store";
import { Color } from "@utils";

import { name } from "./app.json";

const App = () => (
  <Provider store={store}>
    <StatusBar barStyle={"light-content"} backgroundColor={Color.NONE} translucent />
    <Navigation />
  </Provider>
);

AppRegistry.registerComponent(name, () => App);
