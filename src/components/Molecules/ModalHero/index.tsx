import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import classnames from 'classnames';

import styles from './index.module.scss'

import Modal from '../../Atoms/Modal';
import ModalHeroPart from './ModalHeroPart';
import ModalEpisodePart from './ModalEpisodePart';

import { IContentItem } from '../../../redux/reducers/HeroesReducer/types';
import { IEpisodeState } from '../../../redux/reducers/EpisodesReducer/types';
import { LOAD_EPISODE } from '../../../redux/actions/episodeActions';

import { defineEpisodeIndex } from '../../../utils/validator';
import { Loader, Tabs } from '../../Atoms';

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

  const episodePart = episode?.isLoading ? <Loader /> : <ModalEpisodePart episode={episode} setIsModalOpen={setIsModalOpen}/>

  return (
    <Modal >
      <>
      <Tabs isSelectedTab={isEpisodePartOpen} 
           openEpisode={() => openEpisode(hero?.episode?.[0])}
           openHero={() => setIsEpisodePartOpen(false)} />
        {isEpisodePartOpen ? episodePart : 
          <ModalHeroPart setIsEpisodePartOpen={setIsEpisodePartOpen} setIsModalOpen={setIsModalOpen} hero={hero}/> }
      </>
    </Modal>
    
  )
}

export default ModalHero