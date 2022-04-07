import React, { useState } from "react";

import { Image, Pressable, StyleSheet, Text } from "react-native";

import { CharacterDetailsModal } from "@components/moleculas/modals";
import { Character } from "@redux/models/entities";
import { Colors, FontSize, Indent, Radius } from "@utils";

interface Props {
  character: Character;
}

export function ReducedCharacterCard(props: Props) {
  const { character } = props;

  const [isModalShown, setIsModalShown] = useState(false);

  const toggleModal = () => setIsModalShown(!isModalShown);

  return (
    <>
      <Pressable style={styles.container} onPress={toggleModal}>
        <Image source={{ uri: character.image }} style={styles.image} />
        <Text style={styles.text}>{character.name}</Text>
      </Pressable>
      <CharacterDetailsModal character={character} isShown={isModalShown} toggle={toggleModal} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: Indent.DEFAULT,
    padding: Indent.MEDIUM,
    flexDirection: "column",
    borderRadius: Radius.DEFAULT,
    backgroundColor: Colors.TRANSPARENT_CYAN
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    marginBottom: Indent.DEFAULT,
    borderRadius: Radius.DEFAULT
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: FontSize.DEFAULT
  }
});
