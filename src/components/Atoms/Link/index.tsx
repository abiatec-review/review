import styles from './index.module.scss'

interface IProps {
  link: string;
  openEpisode: (link: string) => void;
}

const Link: React.FC<IProps>= ({link, openEpisode }) => {
  return (
    <div className={styles.link} onClick={() => openEpisode(link)}>{link}</div>
  )
}

export default Link