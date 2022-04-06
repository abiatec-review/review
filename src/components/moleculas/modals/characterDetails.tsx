import React from "react";

import { Image, Platform, StyleSheet, View } from "react-native";

import { TextRow } from "@components/atoms";
import { useOrientation } from "@hooks";
import { Character } from "@redux/models/entities";
import { Indent, Radius } from "@utils";

import Modal from "./modal";

interface Props {
  character: Character;
  isShown: boolean;
  toggle: () => void;
}

export function CharacterDetailsModal(props: Props) {
  const { character, isShown, toggle } = props;

  const { isPortrait } = useOrientation();
  const styles = isPortrait ? portraitStyles : landscapeStyles;

  return (
    <Modal isShown={isShown} toggle={toggle} style={styles.modal}>
      <View style={styles.infoBlock}>
        <Image source={{ uri: character.image }} style={styles.image} />
        <View style={styles.textBlock}>
          <TextRow field="Status" data={character.status} />
          <TextRow field="Gender" data={character.gender} />
          <TextRow field="Origin" data={character.origin?.name} />
          <TextRow field="Created" data={character.created} />
        </View>
      </View>
    </Modal>
  );
}

const baseStyles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    borderRadius: Radius.DEFAULT
  },
  textBlock: {
    flex: 1,
    justifyContent: "space-evenly"
  }
});

const portraitStyles = StyleSheet.create({
  ...baseStyles,
  modal: {
    flex: Platform.select({ ios: 0.65, android: 0.85 })
  },
  infoBlock: { flex: 1 },
  image: {
    ...baseStyles.image,
    width: "100%"
  }
});

const landscapeStyles = StyleSheet.create({
  ...baseStyles,
  modal: {
    flex: 0.62
  },
  infoBlock: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Indent.DEFAULT
  },
  image: {
    ...baseStyles.image,
    marginRight: Indent.HUGE,
    flex: Platform.select({ ios: 0.45, android: 0.5 })
  },
  textBlock: {
    ...baseStyles.textBlock,
    height: "80%"
  }
});
