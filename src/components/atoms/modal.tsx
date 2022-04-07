import React from "react";

import { Modal as RnModal, FlexStyle, Text, View, Pressable, StyleSheet } from "react-native";

import { useOrientation } from "@hooks";
import { Colors, FontSize, Indent, Radius } from "@utils";

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
      <View style={styles.container}>
        <View style={[styles.content, style]}>
          {children}
          <Pressable style={styles.closeButton} onPress={toggle}>
            <Text style={styles.closeText}>Close</Text>
          </Pressable>
        </View>
      </View>
    </RnModal>
  );
}

const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.TRANSPARENT_DARK
  },
  content: {
    padding: Indent.EXTRA_HUGE,
    borderRadius: Radius.DEFAULT,
    backgroundColor: Colors.WHITE
  },
  closeButton: {
    width: "100%",
    padding: Indent.DEFAULT,
    borderRadius: Radius.DEFAULT,
    backgroundColor: Colors.BLUE_LIGHT
  },
  closeText: {
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.WHITE,
    fontSize: FontSize.DEFAULT
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
