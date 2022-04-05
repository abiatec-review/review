import { InfiniteScroll } from "@components/atoms";
import { EpisodeCard } from "@components/moleculas/cards";
import { ErrorModal } from "@components/moleculas/modals";
import { getEpisodes, scrollEpisodes } from "@services";
import { useDispatch, useSelector } from "@store";
import React from "react";

export function EpisodesScreen() {
  const dispatch = useDispatch();

  const state = useSelector(({ episode }) => episode);
  const { episodes, isLoading, error } = state;

  const offset = useSelector(({ scroll }) => scroll.episodeOffset);

  return (
    <>
      <InfiniteScroll
        offset={offset}
        data={episodes}
        isLoading={isLoading}
        numColumns={{ portrait: 1, landscape: 2 }}
        load={(page) => dispatch(getEpisodes(page))}
        onScroll={(offset) => dispatch(scrollEpisodes(offset))}
        renderItem={({ item }) => <EpisodeCard episode={item} />}
      />
      <ErrorModal errorText={error} />
    </>
  );
}
