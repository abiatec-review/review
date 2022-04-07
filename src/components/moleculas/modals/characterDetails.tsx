import React from "react";

import { Image, Platform, StyleSheet, Text, View } from "react-native";

import { TextRow } from "@components/atoms";
import { Modal } from "@components/atoms";
import { useOrientation } from "@hooks";
import { Character } from "@redux/models/entities";
import { FontSize, Indent, Radius } from "@utils";

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
      <Text style={styles.name}>{character.name}</Text>
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
  name: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: FontSize.MEDIUM
  },
  image: {
    aspectRatio: 1,
    borderRadius: Radius.DEFAULT
  },
  infoBlock: {
    flex: 1
  },
  textBlock: {
    flex: 0.9,
    justifyContent: "space-evenly"
  }
});

const portraitStyles = StyleSheet.create({
  ...baseStyles,
  modal: {
    flex: Platform.select({ ios: 0.65, android: 0.85 })
  },
  name: {
    ...baseStyles.name,
    marginBottom: Indent.DEFAULT
  },
  image: {
    ...baseStyles.image,
    width: "100%"
  }
});

const landscapeStyles = StyleSheet.create({
  ...baseStyles,
  modal: {
    flex: 0.6
  },
  infoBlock: {
    ...baseStyles.infoBlock,
    flexDirection: "row",
    alignItems: "center"
  },
  image: {
    ...baseStyles.image,
    marginRight: Indent.HUGE,
    flex: 0.5
  },
  textBlock: {
    ...baseStyles.textBlock,
    flex: 1,
    height: "80%"
  }
});
