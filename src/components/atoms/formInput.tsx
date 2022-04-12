import React from "react";

import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";

import { Color, FontSize, Indent, Radius } from "@utils";

interface Props {
  error?: string;
}

export function FormInput(props: TextInputProps & Props) {
  const { error, style, ...rest } = props;

  const inputStyle = [styles.input, { borderColor: error ? Color.RED : Color.BLUE_LIGHT }];

  return (
    <View style={style}>
      <TextInput {...rest} style={inputStyle} />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    color: Color.BLACK,
    padding: Indent.DEFAULT,
    fontSize: FontSize.DEFAULT,
    borderRadius: Radius.DEFAULT
  },
  error: {
    color: Color.RED,
    textAlign: "right"
  }
});
