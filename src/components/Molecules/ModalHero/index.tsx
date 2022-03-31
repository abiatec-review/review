import React from 'react';

import styles from './index.module.scss'

import Modal from '../../Atoms/Modal';
import { IContentItem } from '../../../redux/reducers/HeroesReducer/types';

interface IProps {
  setIsModalOpen: () => void,
  hero: IContentItem | undefined
}

const ModalHero: React.FC<IProps> = ({setIsModalOpen, hero}) => {
  console.log(hero)
  return (
    <Modal>
      <>
        <button className={styles.button} onClick={setIsModalOpen}>Close</button>
        <div className={styles.header}>{hero?.name}</div>
        <img className={styles.image} src={hero?.image} alt='hero'/>
        <div className={styles.status}>Status: {hero?.status}</div>
      </>
    </Modal>
    
  )
}

export default ModalHero