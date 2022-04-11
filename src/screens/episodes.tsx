import React from "react";

import { SafeAreaView } from "react-native";

import { InfiniteScroll } from "@components/atoms";
import { EpisodeCard } from "@components/moleculas/cards";
import { ErrorModal } from "@components/moleculas/modals";
import { getEpisodes, scrollEpisodes } from "@redux/services";
import { useDispatch, useSelector } from "@redux/store";

export function EpisodesScreen() {
  const dispatch = useDispatch();

  const state = useSelector(({ episode }) => episode);
  const { episodes, error } = state;

  const offset = useSelector(({ scroll }) => scroll.episodeOffset);

  return (
    <SafeAreaView>
      <InfiniteScroll
        offset={offset}
        data={episodes}
        numColumns={{ portrait: 1, landscape: 2 }}
        load={(page) => dispatch(getEpisodes(page))}
        onScroll={(offset) => dispatch(scrollEpisodes(offset))}
        renderItem={({ item }) => <EpisodeCard episode={item} />}
      />
      <ErrorModal errorText={error} />
    </SafeAreaView>
  );
}
