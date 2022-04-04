import { Button } from 'components/Atoms';
import { IEpisodesBlock } from 'Molecules/types';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux&saga';
import { getEpisodesInfo } from 'redux&saga/actions/episodesActions';

const EpisodesBlock: React.FC<IEpisodesBlock> = ({ episodeUrlsArray }) => {
  const [numOfVisibleChunks, setNumOfVisibleChunks] = useState(1);

  const dispatch = useDispatch();

  const { receivedEpisodesInfo } = useSelector((state: RootState) => state.episodes);

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
      return receivedEpisodesInfo.map((el: {name: string}) => <div key={`${numOfVisibleChunks} ${el.name}-episodes-item`}>{el.name}</div>);
    }
    return null;
  };

  const moreButtonClickHandler = () => {
    setNumOfVisibleChunks((prev) => prev + 1);
  };

  useEffect(() => {
    dispatch(getEpisodesInfo(episodeUrlsChunks[numOfVisibleChunks - 1]));
  }, [numOfVisibleChunks]);

  return (
    <div className={`${'EpisodesBlockStyles'}`}>
      {renderEpisodesList()}
      <Button text="More" clickHandler={moreButtonClickHandler} />
    </div>
  );
};

export default EpisodesBlock;
