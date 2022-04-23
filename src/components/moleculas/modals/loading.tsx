import React from "react";

import { StyleSheet, View } from "react-native";

import { Spinner } from "@components/atoms";
import { Color } from "@utils";

export function LoadingModal() {
  return (
    <View style={styles.modal}>
      <Spinner />
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    bottom: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.TRANSPARENT_DARK
  }
});
