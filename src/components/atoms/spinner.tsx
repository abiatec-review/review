import React from "react";

import { ActivityIndicator, StyleSheet } from "react-native";

import { Color, Indent } from "@utils";

export function Spinner() {
  return <ActivityIndicator style={spinner} animating size="large" color={Color.BLUE_LIGHT} />;
}

const { spinner } = StyleSheet.create({
  spinner: { margin: Indent.EXTRA_HUGE }
});
