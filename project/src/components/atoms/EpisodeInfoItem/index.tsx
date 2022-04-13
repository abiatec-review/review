import React, { FC, useState } from 'react';

import { useDispatch } from 'react-redux';

import { fetchCharacterAction } from '../../../redux/actions/character';
import CharactersModal from '../../organisms/CharactersModal';
import { EpisodeInfoItemProps } from './type';

const styles = {
  episodeInfoItemStyle: 'grid justify-center grid-rows-1 grid-cols-2 gap-2 border-b-2 border-input-color p-1 cursor-pointer',
};

const EpisodeInfoItem: FC<EpisodeInfoItemProps> = ({ name, air_date, links }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(fetchCharacterAction(links));
    setIsOpenModal(true);
  };

  return (
    <>
      <li className={styles.episodeInfoItemStyle} onClick={clickHandler}>
        <span>{name}</span>
        <span>{air_date}</span>
      </li>
      {isOpenModal ? (<CharactersModal closeModal={() => setIsOpenModal(false)} />) : null}
    </>
  );
};

export default EpisodeInfoItem;
