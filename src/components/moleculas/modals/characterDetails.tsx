import React from "react";

import { Image, Platform, StyleSheet, Text, View } from "react-native";

import { TextRow } from "@components/atoms";
import { Modal } from "@components/atoms";
import { useOrientation } from "@hooks";
import { Character } from "@redux/models/entities";
import { Colors, FontSize, Indent, Radius } from "@utils";

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
    color: Colors.BLACK,
    textAlign: "center",
    fontSize: FontSize.MEDIUM
  },
  image: {
    aspectRatio: 1,
    borderRadius: Radius.DEFAULT
  },
  infoBlock: {
    flex: 1
  }
});

const portraitStyles = StyleSheet.create({
  ...baseStyles,
  modal: {
    height: Platform.select({ ios: "68%", android: "75%" })
  },
  name: {
    ...baseStyles.name,
    marginBottom: Indent.DEFAULT
  },
  image: {
    ...baseStyles.image,
    width: "100%"
  },
  textBlock: {
    height: 170,
    marginTop: Indent.DEFAULT,
    justifyContent: "space-between"
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
    flex: 1,
    height: 170,
    justifyContent: "space-between"
  }
});
