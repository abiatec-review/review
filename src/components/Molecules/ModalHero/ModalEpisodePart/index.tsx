import { HeroIcon } from '../../../Atoms'
import styles from './index.module.scss'

interface IProps {
  setIsModalOpen: () => void,
  goBack: () => void,
  episode: any
}

const ModalEpisodePart: React.FC<IProps> = ({setIsModalOpen, episode, goBack})  => {
  return ( 
    < >
      <button className={styles.buttonBack} onClick={goBack}>Back</button>
      <button className={styles.button} onClick={setIsModalOpen}>Close</button>
      <div className={styles.name}>{episode?.name}</div>
      <div className={styles.episode}>{episode?.episode}</div>
      <div className={styles.date}>{episode?.air_date}</div>
      <div className={styles.heroes}>
        {episode?.heroes.map((hero: any) => {
          return <HeroIcon name={hero.name} image={hero.image} key={hero.id} />
        })}
      </div>
    </>
  )
}

export default ModalEpisodePart