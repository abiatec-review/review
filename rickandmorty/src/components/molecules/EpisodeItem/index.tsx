import React from "react";
import styles from './style.module.scss';

interface IProps {
  item: string;
  fetchEpisodeInfo: (arg: string) => void
}

export const EpisodeItem:React.FC<IProps> = ({item, fetchEpisodeInfo}) => {

  const fetchEpisode = () => {
    fetchEpisodeInfo(item.slice(40))
  }

  return (
    <p className={styles.episodeItem} key={item} onClick={fetchEpisode}>Episode {item.slice(40)}</p>
  )
}
