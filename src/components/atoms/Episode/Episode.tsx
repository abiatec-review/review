import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Episode } from '../../../models/EpisodeReducer';
import { FetchEpisodesCharacters } from '../../../store/actions/EpisodesAction';
import { RootReducer } from '../../../store/reducers';
import { getFirstThree } from '../../../utils/utils';
import Image from '../Image/Image';
import styles from './Episode.module.scss';

interface EpisodeProps {
  data: Episode;
}

const CurrentEpisode = (props: EpisodeProps) => {

  const { data } = props;
  const heroes = useSelector((state: RootReducer) => state.episodes!.charactersInEpisode![data.name]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchEpisodesCharacters({ characters: getFirstThree(data.characters), episodeName: data.name }));
  }, []);

  return (
    <div className={styles.episodeWrapper}>
      <div className={styles.episodeInfo}>
        <div>{ data.name }</div>
        <div>{ data.air_date }</div>
      </div>
      <div className={styles.imgsWrapper}>
        {heroes && heroes.map(({ id, image, name }) => <Image className={styles.characterImg} key={id} textAlt={name} sourceToImg={image} />)}
      </div>
    </div>
  );
};

export default CurrentEpisode;