import React from 'react';

import { IContentItem } from 'redux/reducers/HeroesReducer/types';

import { Link } from 'components/Atoms';

import styles from './index.module.scss'

interface IProps {
  setIsModalOpen: () => void,
  hero?: IContentItem,
  openEpisode: (link: string) => () => void
}

const ModalHeroPart: React.FC<IProps> = ({openEpisode, setIsModalOpen, hero}) => {
  return (
      <>
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