import React from "react";

import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle
} from "react-native";

import { Color, FontSize, Indent, Radius } from "@utils";

interface Props {
  error?: string;
  inputStyle?: StyleProp<ViewStyle>;
}

export function FormInput(props: TextInputProps & Props) {
  const { error, style, inputStyle, ...rest } = props;

  const input = [styles.input, { borderColor: error ? Color.RED : Color.BLUE_LIGHT }, inputStyle];

  return (
    <View style={[styles.container, style]}>
      <TextInput {...rest} style={input} />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: Radius.DEFAULT
  },
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
