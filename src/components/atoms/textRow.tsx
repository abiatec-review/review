import React from "react";

import { StyleSheet, Text, View } from "react-native";

import { Color, FontSize, Indent } from "@utils";

interface Props {
  field: string;
  data: string;
}

export function TextRow(props: Props) {
  const { field, data } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.field}>{`${field}:`}</Text>
      <Text style={styles.data}>{data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center"
  },
  field: {
    color: Color.BLACK,
    fontSize: FontSize.DEFAULT,
    marginRight: Indent.EXTRA_HUGE
  },
  data: {
    flex: 1,
    fontWeight: "bold",
    color: Color.BLACK,
    fontSize: FontSize.DEFAULT
  }
});
