import React from "react";

import { Image, StyleSheet, View } from "react-native";

import { TextRow } from "@components/atoms";
import { useOrientation } from "@hooks";
import { Character } from "@redux/models/entities";
import { Colors, Indent, Radius } from "@utils";

interface Props {
  character: Character;
}

export function FullCharacterCard(props: Props) {
  const { character } = props;

  const { isPortrait } = useOrientation();
  const styles = isPortrait ? portraitStyles : landscapeStyles;

  return (
    <View style={styles.container}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <View style={styles.textBlock}>
        <TextRow field="Name" data={character.name} />
        <TextRow field="Status" data={character.status} />
        <TextRow field="Gender" data={character.gender} />
        <TextRow field="Origin" data={character.origin?.name} />
        <TextRow field="Created" data={character.created} />
      </View>
    </View>
  );
}

const baseStyles = StyleSheet.create({
  container: {
    padding: Indent.HUGE,
    borderRadius: Radius.DEFAULT,
    marginHorizontal: Indent.HUGE,
    backgroundColor: Colors.TRANSPARENT_CYAN
  },
  image: {
    aspectRatio: 1,
    borderRadius: Radius.DEFAULT
  }
});

const portraitStyles = StyleSheet.create({
  ...baseStyles,
  image: { ...baseStyles.image, marginBottom: Indent.DEFAULT },
  textBlock: {
    height: 160,
    justifyContent: "space-between"
  }
});

const landscapeStyles = StyleSheet.create({
  ...baseStyles,
  container: {
    ...baseStyles.container,
    flexDirection: "row",
    alignItems: "center"
  },
  image: {
    ...baseStyles.image,
    flex: 0.4,
    marginRight: Indent.DEFAULT
  },
  textBlock: {
    flex: 1,
    height: 180,
    justifyContent: "space-between"
  }
});
