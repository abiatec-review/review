/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchEpisodes, FetchEpisodesCharacters } from '../../../store/actions/EpisodesAction';
import { RootReducer } from '../../../store/reducers';
import CurrentEpisode from '../../atoms/Episode/Episode';
import styles from './CharacterMoments.module.scss';

const CharacterMoments = () => {

  const dispatch = useDispatch();

  const momentsWithCurrentCharacter = useSelector((state: RootReducer) => state.characters.currentCharacter.episode);
  const momentsData = useSelector((state: RootReducer) => state.episodes.episodes);

  useEffect(() => {
    dispatch(FetchEpisodes(momentsWithCurrentCharacter));
  }, []);

  return (
    momentsData && <div className={styles.momentsWrapper}>
      {momentsData && momentsData.map((episode) => <CurrentEpisode key={episode.id} data={episode} />)}
    </div>
  );
};

export default CharacterMoments;