import { InfiniteScroll, Spinner } from "@components/atoms";
import { FullCharacterCard, ReducedCharacterCard } from "@components/moleculas/cards";
import { ErrorModal } from "@components/moleculas/modals";
import { getCharacter, getCharacterList, scrollCharacters } from "@services";
import { useDispatch, useSelector } from "@store";
import { Colors, FontSize, Indent, Radius } from "@utils";
import React, { useState } from "react";
import * as RN from "react-native";

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
    <RN.SafeAreaView style={styles.container}>
      <RN.View style={styles.header}>
        <RN.TextInput
          placeholder="Search"
          style={styles.input}
          onChangeText={(text) => fetchCharacter(Number(text))}
        />
      </RN.View>
      <RN.View style={styles.content}>{getData()}</RN.View>
      <ErrorModal errorText={error} />
    </RN.SafeAreaView>
  );
}

const styles = RN.StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: "row",
    padding: Indent.DEFAULT,
    justifyContent: "space-between"
  },
  content: { paddingHorizontal: Indent.DEFAULT },
  input: {
    flex: 1,
    padding: Indent.HUGE,
    fontSize: FontSize.DEFAULT,
    borderRadius: Radius.MEDIUM,
    backgroundColor: Colors.GRAY
  },
  button: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Radius.HUGE,
    backgroundColor: Colors.GRAY
  }
});
