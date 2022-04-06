import React, { useState } from "react";

import { Pressable, StyleSheet } from "react-native";

import { TextRow } from "@components/atoms";
import { CharactersModal } from "@components/moleculas/modals";
import { Episode } from "@redux/models/entities";
import { useSelector } from "@redux/store";
import { Colors, Indent, Radius } from "@utils";

interface Props {
  episode: Episode;
}

export function EpisodeCard(props: Props) {
  const { episode } = props;

  const [isModalShown, setIsModalShown] = useState(false);

  const toggleModal = () => setIsModalShown(!isModalShown);

  const characters = useSelector(({ character }) =>
    character.characterList.filter(({ url }) => episode.characters.includes(url))
  );

  return (
    <>
      <Pressable style={styles.container} onPress={toggleModal}>
        <TextRow field="Name" data={episode.name} />
        <TextRow field="Air Date" data={episode.air_date} />
        <TextRow field="Code" data={episode.episode} />
        <TextRow field="Created" data={episode.created} />
      </Pressable>
      {characters?.length > 0 && (
        <CharactersModal
          title="Characters"
          toggle={toggleModal}
          isShown={isModalShown}
          characters={characters}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 140,
    alignItems: "center",
    padding: Indent.HUGE,
    margin: Indent.DEFAULT,
    borderRadius: Radius.DEFAULT,
    backgroundColor: Colors.GRAY,
    justifyContent: "space-between"
  }
});
