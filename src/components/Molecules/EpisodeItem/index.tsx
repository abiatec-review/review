import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from 'redux&saga';

import { Image } from 'components/Atoms';
import { mapChars } from 'helpers';
import { IEpisodeItem } from 'Molecules/types';

const EpisodeItem: React.FC<IEpisodeItem> = ({ episodeData }) => {
  const chars = useSelector((state: RootState) => state.episodes.characters);
  return (
    <div className="grid grid-cols-3">
      <div className="text-base text-center">{episodeData.episode}</div>
      <div className="text-base">{episodeData.name}</div>
      <div className="grid grid-flow-col">
        {mapChars(episodeData.characters.slice(0, 3)).map((item) => <Image pdd="0" alt="asd" src={chars[item.id]} key={`${item.id}-ep-char-item`} />)}
      </div>
    </div>
  );
};

export default EpisodeItem;
