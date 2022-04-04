import { useOrientation } from "@hooks";
import { Character } from "@models/entities";
import { FontSize, Indent, Radius } from "@utils";
import React from "react";
import * as RN from "react-native";

import Modal from "./modal";

interface Props {
  title: string;
  isShown: boolean;
  toggle: () => void;
  characters: Array<Character>;
}

export function CharactersModal(props: Props) {
  const { characters, isShown, toggle, title } = props;

  const { isPortrait } = useOrientation();

  const getHeight = () => {
    if (characters.length > 10) return { height: isPortrait ? 270 : 180 };

    const multiplier = characters.length % 10;
    if (isPortrait) return { height: multiplier > 3 ? 270 : multiplier * 90 };
    else return { height: multiplier > 3 ? 180 : multiplier * 90 };
  };

  return (
    <Modal isShown={isShown} toggle={toggle} style={{ flex: 0 }}>
      <RN.Text style={styles.title}>{title}</RN.Text>
      <RN.ScrollView style={getHeight()}>
        {characters.map(({ id, name, image }) => (
          <RN.View key={id} style={styles.character}>
            <RN.Image source={{ uri: image }} style={styles.image} />
            <RN.Text style={styles.text}>{name}</RN.Text>
          </RN.View>
        ))}
      </RN.ScrollView>
    </Modal>
  );
}

const styles = RN.StyleSheet.create({
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: FontSize.MEDIUM,
    paddingBottom: Indent.DEFAULT
  },
  character: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Indent.DEFAULT
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: Radius.HUGE,
    marginRight: Indent.DEFAULT
  },
  text: {
    flex: 1,
    fontWeight: "600",
    fontSize: FontSize.MEDIUM
  }
});
