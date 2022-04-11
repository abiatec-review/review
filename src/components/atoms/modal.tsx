import React from "react";

import {
  Modal as RnModal,
  FlexStyle,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native";

import { useOrientation } from "@hooks";
import { Color, Indent, Radius } from "@utils";

interface Props {
  isShown: boolean;
  toggle: () => void;
  style?: FlexStyle;
}

export function Modal(props: React.PropsWithChildren<Props>) {
  const { isShown, toggle, children, style } = props;

  const { isPortrait } = useOrientation();
  const styles = isPortrait ? portraitStyles : landscapelStyles;

  return (
    <RnModal
      transparent
      animationType="fade"
      visible={isShown}
      onRequestClose={toggle}
      supportedOrientations={["portrait", "landscape"]}
    >
      <TouchableOpacity style={styles.container} onPressOut={toggle}>
        <TouchableWithoutFeedback>
          <View style={[styles.content, style]}>{children}</View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </RnModal>
  );
}

const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.TRANSPARENT_DARK
  },
  content: {
    borderRadius: Radius.DEFAULT,
    paddingVertical: Indent.DEFAULT,
    backgroundColor: Color.CYAN_LIGHT,
    paddingHorizontal: Indent.EXTRA_HUGE
  }
});

const portraitStyles = StyleSheet.create({
  ...baseStyles,
  content: {
    ...baseStyles.content,
    width: "91%"
  }
});

const landscapelStyles = StyleSheet.create({
  ...baseStyles,
  content: {
    ...baseStyles.content,
    width: "70%"
  }
});
