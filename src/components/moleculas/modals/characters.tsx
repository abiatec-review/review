import React, { useEffect, useState } from "react";

import { FlatList, Image, ListRenderItemInfo, StyleSheet, Text, View } from "react-native";

import { Spinner } from "@components/atoms";
import { Modal } from "@components/atoms";
import { useOrientation } from "@hooks";
import { ReducedCharacter } from "@redux/models/entities";
import { getCharactersByUrls } from "@redux/services";
import { Color, FontSize, Indent, Radius } from "@utils";

interface Props {
  title: string;
  isShown: boolean;
  toggle: () => void;
  charactersUrls: Array<string>;
}

export function CharactersModal(props: Props) {
  const { charactersUrls, isShown, toggle, title } = props;

  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState<Array<ReducedCharacter>>([]);

  useEffect(() => {
    if (isShown) {
      setIsLoading(true);
      getCharactersByUrls(charactersUrls).then((result) => {
        setCharacters(result);
        setIsLoading(false);
      });
    }
    return () => setCharacters([]);
  }, [isShown]);

  const { isPortrait } = useOrientation();

  const getHeight = () => {
    const length = charactersUrls.length;
    if (length >= 4) return { height: isPortrait ? 270 : 180 };
    else {
      const multiplier = isPortrait ? length % 10 : Math.ceil(length / 2);
      return { height: multiplier * 90 };
    }
  };

  const character = ({ item }: ListRenderItemInfo<ReducedCharacter>) => {
    const text = { ...styles.text, ...(isPortrait ? { flex: 1 } : { width: 120 }) };
    return (
      <View onStartShouldSetResponder={() => true} style={styles.character}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={text}>{item.name}</Text>
      </View>
    );
  };

  return (
    <Modal isShown={isShown} toggle={toggle}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={characters}
        style={getHeight()}
        renderItem={character}
        key={Number(isPortrait)}
        numColumns={isPortrait ? 1 : 2}
        keyExtractor={(_, i) => i.toString()}
        ListFooterComponent={isLoading ? <Spinner /> : null}
        columnWrapperStyle={!isPortrait && styles.columnWrapper}
        contentContainerStyle={isLoading && styles.contentContainer}
      />
    </Modal>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    color: Color.BLACK,
    textAlign: "center",
    fontSize: FontSize.MEDIUM,
    paddingBottom: Indent.DEFAULT
  },
  character: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Indent.MEDIUM
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  columnWrapper: {
    justifyContent: "space-between",
    paddingHorizontal: Indent.EXTRA_HUGE
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: Radius.HUGE,
    marginRight: Indent.DEFAULT
  },
  text: {
    fontWeight: "600",
    color: Color.BLACK,
    fontSize: FontSize.MEDIUM
  }
});
