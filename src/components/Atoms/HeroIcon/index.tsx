import styles from './index.module.scss'

interface IProps {
  name: string;
  image: string;
}
export const HeroIcon: React.FC<IProps>= ({name, image}) => {
  return (
    <div className={styles.item}>
      <img className={styles.image} src={image} width={20} alt={name}/>
      <div className={styles.name}>{name}</div>
    </div>
  )
}