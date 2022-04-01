import { IEpisodeState, IHeroFromEpisode } from '../../../../redux/reducers/EpisodesReducer/types'
import { HeroIcon, Loader } from '../../../Atoms'
import styles from './index.module.scss'

interface IProps {
  setIsModalOpen: () => void,
  goBack: () => void,
  episode?: IEpisodeState
}

const ModalEpisodePart: React.FC<IProps> = ({setIsModalOpen, episode, goBack})  => {
  return ( 
    < >
      <button className={styles.buttonBack} onClick={goBack}>Back</button>
      <button className={styles.button} onClick={setIsModalOpen}>Close</button>
      {episode?.isLoading ? <Loader /> : <>
        <div className={styles.name}>{episode?.name}</div>
        <div className={styles.episode}>{episode?.episode}</div>
        <div className={styles.date}>{episode?.air_date}</div>
        <div className={styles.heroes}>
          {episode?.heroes.map((hero: IHeroFromEpisode) => {
            return <HeroIcon name={hero.name} image={hero.image} key={hero.id} />
          })}
        </div>
      </>}
    </>
  )
}

export default ModalEpisodePart