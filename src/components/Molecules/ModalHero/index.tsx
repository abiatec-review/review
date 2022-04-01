import React, { useState } from 'react';

import styles from './index.module.scss'
import classnames from 'classnames';
import Modal from '../../Atoms/Modal';
import { IContentItem } from '../../../redux/reducers/HeroesReducer/types';
import ModalHeroPart from './ModalHeroPart';
import ModalEpisodePart from './ModalEpisodePart';
import { IEpisodeState } from '../../../redux/reducers/EpisodesReducer/types';
import { defineEpisodeIndex } from '../../../utils/validator';
import { LOAD_EPISODE } from '../../../redux/actions/episodeActions';
import { useDispatch } from 'react-redux';

interface IProps {
  setIsModalOpen: () => void,
  hero?: IContentItem,
  episode?: IEpisodeState
}

const ModalHero: React.FC<IProps> = ({setIsModalOpen, hero, episode}) => {
  const [isEpisodePartOpen, setIsEpisodePartOpen] = useState(false)
  const dispatch = useDispatch()

  const openEpisode = (id?: string) => {
    const episodeId = defineEpisodeIndex(id!)
    dispatch({type: LOAD_EPISODE, payload: episodeId})
    setIsEpisodePartOpen(true)
  }
  return (
    <Modal closeModal={setIsModalOpen}>
      <>
      <span className={classnames(!isEpisodePartOpen && styles.active, styles.tab)} onClick={() => setIsEpisodePartOpen(false)}>Hero</span>
      <span className={classnames(isEpisodePartOpen && styles.active, styles.tab)} onClick={() => openEpisode(hero?.episode?.[0])}>Episode</span>
        {isEpisodePartOpen ? 
          <ModalEpisodePart episode={episode} setIsModalOpen={setIsModalOpen}/>: 
          <ModalHeroPart setIsEpisodePartOpen={setIsEpisodePartOpen} setIsModalOpen={setIsModalOpen} hero={hero}/> }
      </>
    </Modal>
    
  )
}

export default ModalHero