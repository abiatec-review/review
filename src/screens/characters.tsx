import React, { useState } from "react";

import debounce from "lodash.debounce";
import { SafeAreaView, StyleSheet, TextInput, View } from "react-native";

import { InfiniteScroll } from "@components/atoms";
import { CharacterCard } from "@components/moleculas/cards";
import { ErrorModal } from "@components/moleculas/modals";
import { getCharactersByName, getCharacters, scrollCharacters } from "@redux/services";
import { useDispatch, useSelector } from "@redux/store";
import { Colors, FontSize, Indent, Radius } from "@utils";

export function CharactersScreen() {
  const [name, setName] = useState<string>();
  const dispatch = useDispatch();

  const state = useSelector(({ character }) => character);
  const { filteredCharacters, characters, error } = state;

  const offset = useSelector(({ scroll }) => scroll.characterOffset);

  const fetchCharacter = debounce((name: string) => {
    setName(name);
    name && dispatch(getCharactersByName(name));
  }, 500);

  const loadMore = (page: number) => {
    return name ? dispatch(getCharactersByName(name, page)) : dispatch(getCharacters(page));
  };

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <TextInput
          placeholder="Search"
          style={styles.input}
          onChangeText={fetchCharacter}
          placeholderTextColor={Colors.GRAY}
        />
      </View>
      <InfiniteScroll
        offset={offset}
        load={loadMore}
        numColumns={{ portrait: 2, landscape: 4 }}
        data={name ? filteredCharacters : characters}
        onScroll={(offset) => dispatch(scrollCharacters(offset))}
        renderItem={({ item }) => <CharacterCard character={item} />}
      />
      <ErrorModal errorText={error} />
    </SafeAreaView>
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
    color: Colors.BLACK,
    padding: Indent.HUGE,
    fontSize: FontSize.DEFAULT,
    borderRadius: Radius.MEDIUM,
    marginHorizontal: Indent.DEFAULT,
    backgroundColor: Colors.CYAN_LIGHT
  }
});
