import React, { useEffect, useMemo, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux&saga';

import { Button } from 'components/Atoms';
import { EpisodeItem } from 'components/Molecules';
import { IEpisodesBlock } from 'Molecules/types';
import { getEpisodesInfo } from 'redux&saga/actions/episodesActions';
import { IEpisode } from 'redux&saga/types';

export const EpisodesBlock: React.FC<IEpisodesBlock> = ({ episodeUrlsArray }) => {
  const [numOfVisibleChunks, setNumOfVisibleChunks] = useState<number>(1);

  const dispatch = useDispatch();

  const { receivedEpisodesInfo, characters } = useSelector((state: RootState) => state.episodes);

  const episodeUrlsChunks = useMemo(() => {
    const episodes = [];
    if (episodeUrlsArray) {
      for (let i = 0; i < episodeUrlsArray.length; i += 10) {
        episodes.push(episodeUrlsArray.slice(i, i + 10));
      }
    }
    return episodes;
  }, [episodeUrlsArray]);

  const renderEpisodesList = () => {
    if (receivedEpisodesInfo) {
      return receivedEpisodesInfo.map((el: IEpisode) => <EpisodeItem chars={characters} key={`${numOfVisibleChunks} ${el.name}-episodes-item`} episodeData={el} />);
    }
    return null;
  };

  const moreButtonClickHandler = () => {
    setNumOfVisibleChunks((prev) => prev + 1);
  };

  useEffect(() => {
    if (episodeUrlsChunks[numOfVisibleChunks - 1]) {
      dispatch(getEpisodesInfo(episodeUrlsChunks[numOfVisibleChunks - 1]));
    }
  }, [numOfVisibleChunks]);

  return (
    <div className="pt-5 grid justify-center gap-5">
      {renderEpisodesList()}
      <Button text="More" clickHandler={moreButtonClickHandler} />
    </div>
  );
};
