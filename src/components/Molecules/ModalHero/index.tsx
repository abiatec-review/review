import React, { useState } from 'react';

import styles from './index.module.scss'

import Modal from '../../Atoms/Modal';
import { IContentItem } from '../../../redux/reducers/HeroesReducer/types';
import ModalHeroPart from './ModalHeroPart';
import ModalEpisodePart from './ModalEpisodePart';
import { IEpisodeState } from '../../../redux/reducers/EpisodesReducer/types';

interface IProps {
  setIsModalOpen: () => void,
  hero?: IContentItem,
  episode?: IEpisodeState
}

const ModalHero: React.FC<IProps> = ({setIsModalOpen, hero, episode}) => {
  const [isEpisodePartOpen, setIsEpisodePartOpen] = useState(false)

  return (
    <Modal closeModal={setIsModalOpen}>
      <>
        {isEpisodePartOpen ? 
          <ModalEpisodePart goBack={() => setIsEpisodePartOpen(false)} episode={episode} setIsModalOpen={setIsModalOpen}/>: 
          <ModalHeroPart setIsEpisodePartOpen={setIsEpisodePartOpen} setIsModalOpen={setIsModalOpen} hero={hero}/> }
      </>
    </Modal>
    
  )
}

export default ModalHero