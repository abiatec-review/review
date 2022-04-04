import { FontSize, Indent } from "@utils";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

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
    fontSize: FontSize.DEFAULT,
    marginRight: Indent.EXTRA_HUGE
  },
  data: {
    flex: 1,
    fontWeight: "bold",
    fontSize: FontSize.DEFAULT
  }
});
