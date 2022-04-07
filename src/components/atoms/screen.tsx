import React from "react";

import { SafeAreaView, StyleSheet } from "react-native";

import { Indent } from "@utils";

export function Screen({ children }: React.PropsWithChildren<{}>) {
  return <SafeAreaView style={screen}>{children}</SafeAreaView>;
}
const { screen } = StyleSheet.create({
  screen: {
    flex: 1,
    marginHorizontal: Indent.DEFAULT
  }
});
