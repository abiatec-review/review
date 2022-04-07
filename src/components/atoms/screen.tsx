import React from "react";

import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";

export function Screen(props: React.PropsWithChildren<{}>) {
  const { children } = props;

  return (
    <ImageBackground blurRadius={5} style={image} source={require("@assets/background.jpeg")}>
      <SafeAreaView>{children}</SafeAreaView>
    </ImageBackground>
  );
}

const { image } = StyleSheet.create({
  image: {
    height: "100%"
  }
});
