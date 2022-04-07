import React, { useState } from "react";

import { Pressable, StyleSheet } from "react-native";

import { TextRow } from "@components/atoms";
import { CharactersModal } from "@components/moleculas/modals";
import { Location } from "@redux/models/entities";
import { Colors, Indent, Radius } from "@utils";

interface Props {
  location: Location;
}

export function LocationCard(props: Props) {
  const { location } = props;

  const [isModalShown, setIsModalShown] = useState(false);

  const toggleModal = () => setIsModalShown(!isModalShown);

  return (
    <>
      <Pressable style={styles.container} onPress={toggleModal}>
        <TextRow field="Name" data={location.name} />
        <TextRow field="Type" data={location.type} />
        <TextRow field="Dimension" data={location.dimension} />
        <TextRow field="Created" data={location.created} />
        <TextRow field="Residents" data={location.residents.length.toString()} />
      </Pressable>
      {location.residents?.length > 0 && (
        <CharactersModal
          toggle={toggleModal}
          title={location.name}
          isShown={isModalShown}
          charactersUrls={location.residents}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 170,
    alignItems: "center",
    padding: Indent.HUGE,
    margin: Indent.DEFAULT,
    borderRadius: Radius.DEFAULT,
    backgroundColor: Colors.GRAY,
    justifyContent: "space-between"
  }
});
