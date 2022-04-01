import { IEpisodesBlock } from 'Molecules/types';
import React from 'react';

const EpisodesBlock: React.FC<IEpisodesBlock> = ({ episodesArray }) => {
  console.log(episodesArray);
  return (
    <div className={`${'EpisodesBlockStyles'}`}>
      EpisodesBlock
    </div>
  );
};

export default EpisodesBlock;
