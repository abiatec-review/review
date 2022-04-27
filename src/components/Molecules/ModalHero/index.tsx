import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { IContentItem } from 'redux/reducers/HeroesReducer/types';
import { IEpisodeState } from 'redux/reducers/EpisodesReducer/types';
import { loadEpisodeAC } from 'redux/actions/episodeActions';

import ModalHeroPart from './ModalHeroPart';
import ModalEpisodePart from './ModalEpisodePart';
import { Loader, Tabs, Modal, Button } from 'components/Atoms';

import { defineEpisodeIndex } from 'utils/validator';

import styles from './index.module.scss'

interface IProps {
  setIsModalOpen: () => void,
  hero?: IContentItem,
  episode?: IEpisodeState
}

const ModalHero: React.FC<IProps> = ({setIsModalOpen, hero, episode}) => {
  const [isEpisodePartOpen, setIsEpisodePartOpen] = useState<boolean>(false)
  const dispatch = useDispatch()

  const openEpisode = (id?: string) => () => {
    const episodeId = defineEpisodeIndex(id!)
    dispatch(loadEpisodeAC(episodeId))
    setIsEpisodePartOpen(true)
  }

  const render = () => {
    switch(true) {
      case episode?.isLoading: {
        return <Loader className={styles.loader}/>
      }
      case !episode?.isLoading && isEpisodePartOpen: {
        return <ModalEpisodePart episode={episode}/>
      }
      case !episode?.isLoading && !isEpisodePartOpen: {
        return <ModalHeroPart setIsModalOpen={setIsModalOpen} hero={hero} openEpisode={openEpisode}/>
      }
    }
  }

  return (
    <Modal closeModal={setIsModalOpen}>
      <>
      <Tabs isSelectedTab={isEpisodePartOpen} 
           openEpisode={openEpisode(hero?.episode?.[0])}
           openHero={() => setIsEpisodePartOpen(false)} />
      <Button className={styles.button} onClick={setIsModalOpen}>Close</Button>
        {render()}
      </>
    </Modal>
    
  )
}

export default ModalHero