import React, { useState } from "react";

import { Pressable, StyleSheet } from "react-native";

import { TextRow } from "@components/atoms";
import { CharactersModal } from "@components/moleculas/modals";
import { Location } from "@redux/models/entities";
import { useSelector } from "@redux/store";
import { Colors, Indent, Radius } from "@utils";

interface Props {
  location: Location;
}

export function LocationCard(props: Props) {
  const { location } = props;

  const [isModalShown, setIsModalShown] = useState(false);

  const toggleModal = () => setIsModalShown(!isModalShown);

  const residents = useSelector(({ character }) =>
    character.characterList.filter(({ url }) => location.residents.includes(url))
  );

  return (
    <>
      <Pressable style={styles.container} onPress={toggleModal}>
        <TextRow field="Name" data={location.name} />
        <TextRow field="Type" data={location.type} />
        <TextRow field="Dimension" data={location.dimension} />
        <TextRow field="Created" data={location.created} />
        <TextRow field="Residents" data={residents.length.toString()} />
      </Pressable>
      {residents?.length > 0 && (
        <CharactersModal
          title="Residents"
          toggle={toggleModal}
          characters={residents}
          isShown={isModalShown}
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
