import React, { useState } from "react";

import { StyleSheet, TextInput, View } from "react-native";

import { InfiniteScroll, Spinner } from "@components/atoms";
import { Screen } from "@components/atoms";
import { FullCharacterCard, ReducedCharacterCard } from "@components/moleculas/cards";
import { ErrorModal } from "@components/moleculas/modals";
import { getCharacter, getCharacterList, scrollCharacters } from "@redux/services";
import { useDispatch, useSelector } from "@redux/store";
import { Colors, FontSize, Indent, Radius } from "@utils";

export function CharactersScreen() {
  const [id, setId] = useState<number>();
  const dispatch = useDispatch();

  const state = useSelector(({ character }) => character);
  const { character, characterList, isLoading, error } = state;

  const offset = useSelector(({ scroll }) => scroll.characterOffset);

  const fetchCharacter = (id: number) => {
    setId(id);
    id && dispatch(getCharacter(id));
  };

  const getData = () => {
    if (id) {
      return isLoading ? <Spinner /> : <FullCharacterCard character={character} />;
    } else {
      return (
        <InfiniteScroll
          offset={offset}
          data={characterList}
          isLoading={isLoading}
          numColumns={{ portrait: 2, landscape: 4 }}
          load={(page) => dispatch(getCharacterList(page))}
          onScroll={(offset) => dispatch(scrollCharacters(offset))}
          renderItem={({ item }) => <ReducedCharacterCard character={item} />}
        />
      );
    }
  };

  return (
    <Screen>
      <View style={styles.header}>
        <TextInput
          placeholder="Search"
          style={styles.input}
          onChangeText={(text) => fetchCharacter(Number(text))}
        />
      </View>
      {getData()}
      <ErrorModal errorText={error} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    padding: Indent.DEFAULT,
    justifyContent: "space-between"
  },
  input: {
    flex: 1,
    padding: Indent.HUGE,
    fontSize: FontSize.DEFAULT,
    borderRadius: Radius.MEDIUM,
    backgroundColor: Colors.GRAY
  }
});
