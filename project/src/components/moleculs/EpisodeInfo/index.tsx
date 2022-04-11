import React, { FC } from "react";
import { useTypedSelector } from "../../../utils/hooks/useTypedSelector";
import EpisodeInfoItem from "../../atoms/EpisodeInfoItem";

const styles = {
    episodeInfoStyle: 'overflow-auto w-1/2 h-40',
}

const EpisodeInfo: FC = () => {
    const { episodes } = useTypedSelector((state) => state.episodes);

    return(
        <ul className={styles.episodeInfoStyle}>
            {episodes.map((item) => {
                return(
                    <EpisodeInfoItem 
                        name={item.name} 
                        air_date={item.air_date} 
                        links={item.characters}
                        key={item.id}
                    />
                );
            })}
        </ul>
    );
}

export default EpisodeInfo;