import React from 'react';

import './index.css'

import { IContentItem } from '../../Atoms/ContentItem';
import Modal from '../../Atoms/Modal';

interface IProps {
  setIsModalOpen: () => void,
  hero: IContentItem | undefined
}

export const ModalHero: React.FC<IProps> = ({setIsModalOpen, hero}) => {
  console.log(hero)
  return (
    <Modal>
      <>
        <button className='modal-button' onClick={setIsModalOpen}>Close</button>
        <div className='modal-header'>{hero?.name}</div>
        <img className='modal-image' src={hero?.image} alt='hero'/>
        <div className='modal-status'>Status: {hero?.status}</div>
      </>
    </Modal>
    
  )
}