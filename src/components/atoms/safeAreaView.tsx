import React from "react";

import { Platform, SafeAreaView as DefaultSafeAreaView, StyleSheet } from "react-native";
import { SafeAreaViewProps } from "react-native-safe-area-context";

import { Indent } from "@utils";

export function SafeAreaView(props: SafeAreaViewProps) {
  const { style, ...rest } = props;
  return <DefaultSafeAreaView {...rest} style={[style, styles.screen]} />;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.select({ android: Indent.HUGE * 2 })
  }
});
