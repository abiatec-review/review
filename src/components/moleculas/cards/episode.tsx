import React, { useState } from "react";

import { Pressable, StyleSheet } from "react-native";

import { TextRow } from "@components/atoms";
import { CharactersModal } from "@components/moleculas/modals";
import { Episode } from "@redux/models/entities";
import { Colors, Indent, Radius } from "@utils";

interface Props {
  episode: Episode;
}

export function EpisodeCard(props: Props) {
  const { episode } = props;

  const [isModalShown, setIsModalShown] = useState(false);

  const toggleModal = () => setIsModalShown(!isModalShown);

  return (
    <>
      <Pressable style={container} onPress={toggleModal}>
        <TextRow field="Name" data={episode.name} />
        <TextRow field="Air Date" data={episode.air_date} />
        <TextRow field="Code" data={episode.episode} />
        <TextRow field="Created" data={episode.created} />
      </Pressable>
      {episode.characters?.length > 0 && (
        <CharactersModal
          title={episode.name}
          toggle={toggleModal}
          isShown={isModalShown}
          charactersUrls={episode.characters}
        />
      )}
    </>
  );
}

const { container } = StyleSheet.create({
  container: {
    flex: 1,
    height: 160,
    padding: Indent.HUGE,
    margin: Indent.DEFAULT,
    borderRadius: Radius.DEFAULT,
    justifyContent: "space-between",
    backgroundColor: Colors.TRANSPARENT_CYAN
  }
});
