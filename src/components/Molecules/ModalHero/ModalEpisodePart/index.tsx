import { IEpisodeState, IHeroFromEpisode } from 'redux/reducers/EpisodesReducer/types'

import { HeroIcon } from 'components/Atoms'

import styles from './index.module.scss'

interface IProps {
  setIsModalOpen: () => void,
  episode?: IEpisodeState
}

const ModalEpisodePart: React.FC<IProps> = ({setIsModalOpen, episode})  => {
  return ( 
    <>
      <div className={styles.name}>{episode?.name}</div>
      <div className={styles.episode}>{episode?.episode}</div>
      <div className={styles.date}>{episode?.air_date}</div>
      <div className={styles.heroes}>
        {episode?.heroes?.map((hero: IHeroFromEpisode) => {
          return <HeroIcon name={hero.name} image={hero.image} key={hero.id} />
        })}
      </div>
    </>
  )
}

export default ModalEpisodePart