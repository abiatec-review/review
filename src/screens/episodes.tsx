import { InfiniteScroll } from "@components/atoms";
import { EpisodeCard } from "@components/moleculas/cards";
import { getEpisodes, scrollEpisodes } from "@services";
import { useDispatch, useSelector } from "@store";
import React from "react";

export function EpisodesScreen() {
  const dispatch = useDispatch();

  const state = useSelector(({ episodeReducer }) => episodeReducer);
  const { episodes, isLoading } = state;

  const offset = useSelector(({ scrollReducer }) => scrollReducer.episodeOffset);

  return (
    <InfiniteScroll
      offset={offset}
      data={episodes}
      isLoading={isLoading}
      numColumns={{ portrait: 1, landscape: 2 }}
      load={(page) => dispatch(getEpisodes(page))}
      onScroll={(offset) => dispatch(scrollEpisodes(offset))}
      renderItem={({ item }) => <EpisodeCard episode={item} />}
    />
  );
}
