import React from "react";
import styles from './style.module.scss';

interface IProps {
    item: any;
    fetchEpisodeInfo: (arg: string) => void}

export const EpisodeItem:React.FC<IProps> = ({item, fetchEpisodeInfo, setIsHeroPartOpen}) => {


    const fetchEpisode = () => {
        fetchEpisodeInfo(item.slice(40))
        // setIsHeroPartOpen(false)
        // if(dataEpisodes.episodeImages.length > 0) {
        //     setIsHeroPartOpen(false)
        // }
    }

    return (
        <p className={styles} key={item} onClick={fetchEpisode}>Episode {item.slice(40)}</p>
    )
}
