import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_EPISODE } from '../../../../redux/actions/episodeActions';
import { IContentItem } from '../../../../redux/reducers/HeroesReducer/types';
import { defineEpisodeIndex } from '../../../../utils/validator';
import { Link } from '../../../Atoms';

import styles from './index.module.scss'

interface IProps {
  setIsModalOpen: () => void,
  hero?: IContentItem,
  setIsEpisodePartOpen: (isOpen: boolean) => void,
}

const ModalHeroPart: React.FC<IProps> = ({setIsModalOpen, hero, setIsEpisodePartOpen}) => {
  const dispatch = useDispatch()

  const openEpisode = (id: string) => {
    const episodeId = defineEpisodeIndex(id)
    dispatch({type: LOAD_EPISODE, payload: episodeId})
    setIsEpisodePartOpen(true)
  }
  return (
      <>
        <button className={styles.button} onClick={setIsModalOpen}>Close</button>
        <div className={styles.header}>{hero?.name}</div>
        <img className={styles.image} src={hero?.image} alt='hero'/>
        <div className={styles.status}>Status: {hero?.status}</div>
        <div className={styles.linksBlock}>
          <div className={styles.episodesTitle}>All episodes</div>
          {hero?.episode?.map(elem => <Link key={elem} openEpisode={openEpisode} link={elem} />)}
        </div>
        
      </>
    
  )
}

export default ModalHeroPart