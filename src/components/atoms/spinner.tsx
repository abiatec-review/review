import React from "react";

import { ActivityIndicator, StyleSheet } from "react-native";

import { Colors, Indent } from "@utils";

export function Spinner() {
  return <ActivityIndicator style={spinner} animating size="large" color={Colors.BLUE_DARK} />;
}

const { spinner } = StyleSheet.create({
  spinner: { margin: Indent.EXTRA_HUGE }
});
