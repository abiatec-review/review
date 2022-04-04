import { Colors, Indent } from "@utils";
import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";

export function Spinner() {
  return <ActivityIndicator style={spinner} animating size="large" color={Colors.BLUE_DARK} />;
}

const { spinner } = StyleSheet.create({
  spinner: { margin: Indent.EXTRA_HUGE }
});
