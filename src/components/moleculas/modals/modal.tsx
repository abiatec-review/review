import { useOrientation } from "@hooks";
import { Colors, FontSize, Indent, Radius } from "@utils";
import React from "react";
import * as RN from "react-native";

interface Props {
  isShown: boolean;
  toggle: () => void;
  style?: RN.FlexStyle;
}

function Modal(props: React.PropsWithChildren<Props>) {
  const { isShown, toggle, children, style } = props;

  const { isPortrait } = useOrientation();
  const styles = isPortrait ? portraitStyles : landscapelStyles;

  return (
    <RN.Modal
      transparent
      animationType="fade"
      visible={isShown}
      onRequestClose={toggle}
      supportedOrientations={["portrait", "landscape"]}
    >
      <RN.View style={styles.container}>
        <RN.View style={[styles.content, style]}>
          {children}
          <RN.Pressable style={styles.closeButton} onPress={toggle}>
            <RN.Text style={styles.closeText}>Close</RN.Text>
          </RN.Pressable>
        </RN.View>
      </RN.View>
    </RN.Modal>
  );
}

export default Modal;

const baseStyles = RN.StyleSheet.create({
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

const portraitStyles = RN.StyleSheet.create({
  ...baseStyles,
  content: {
    ...baseStyles.content,
    width: "91%"
  }
});

const landscapelStyles = RN.StyleSheet.create({
  ...baseStyles,
  content: {
    ...baseStyles.content,
    width: "70%"
  }
});
