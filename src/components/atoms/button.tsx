import React from "react";

import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle
} from "react-native";

import { Color, FontSize, Indent, Radius } from "@utils";
interface Props {
  text: string;
  textStyle?: TextStyle;
}

type ButtonProps = Omit<PressableProps, "children"> & Props;

export function Button(props: ButtonProps) {
  const { text, textStyle, style, ...rest } = props;

  return (
    <Pressable style={[styles.button, style as StyleProp<ViewStyle>]} {...rest}>
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    padding: Indent.DEFAULT,
    justifyContent: "center",
    borderRadius: Radius.DEFAULT,
    backgroundColor: Color.BLUE_LIGHT
  },
  buttonText: {
    fontWeight: "500",
    color: Color.WHITE,
    fontSize: FontSize.DEFAULT
  }
});
