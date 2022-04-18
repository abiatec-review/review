import React, {useState} from "react";
import styles from './style.module.scss';
import { ContentItem } from "../../atoms/ContentItem";
import { EpisodeItem } from "../../atoms/EpisodeItem";
import {FetchMoreButton} from "../../atoms/FetchMoreButton";
import {Modal} from "../../atoms";
import {useDispatch} from "react-redux";
import {deleteEpisodesCharacter, getEpisodes } from "../../../redux/actions";
import {TEpisode} from "../../../models/episode";
import {TCharacter} from "../../../models/character";

interface IDataEpisodes{
    episodeImages: TCharacter<string>[];
    episodes: TEpisode<string>;
    episodesLoader: boolean
}

interface IData{
    characters: TCharacter<string>[];
    charactersLoader: boolean
}

interface IProps{
    data: IData;
    visible: number;
    dataEpisodes: IDataEpisodes;
    setVisible: (visible: number) => void;
}

export const Content:React.FC<IProps> = ({data, dataEpisodes, visible, setVisible}) => {


    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const [id, setId] = useState<number>(0);

    const [isHeroPartOpen, setIsHeroPartOpen] = useState<boolean>(true)

    const foundPerson = data?.characters?.find((item: TCharacter<string>) => item.id === +id);

    const dispatch = useDispatch();

    const showModal = () => {
        setModalVisible(prev => !prev);
        setIsHeroPartOpen(true)
        if(modalVisible) {
            dispatch(deleteEpisodesCharacter())
        }
    }

    const fetchEpisodeInfo = (episodeId: string) => {
        dispatch(getEpisodes({episodeName: episodeId}))
        setIsHeroPartOpen(false)
    }

    const openToggle = (bool: boolean) => () => {
        setIsHeroPartOpen(bool)
        if(dataEpisodes.episodeImages.length <= 0) {
            setIsHeroPartOpen(true)
        }
    }


    return (
        <>
            <div className={styles.gallery}>
                { data.characters.slice(0, visible).map((item: TCharacter<string>) => (
                    <ContentItem key={item.id} showModal={() => setModalVisible(true)} setId={setId} item={item} />
                ))}
            </div>
            {visible < data.characters.length &&
                <FetchMoreButton visible={visible} setVisible={setVisible}/>
            }
            {modalVisible &&
                <Modal showModal={showModal}>
                    <div className={styles.tabs}>
                        <div className={styles.modalTab} onClick={openToggle(false)}>
                            Episode
                        </div>
                        <div className={styles.modalTab} onClick={openToggle(true)}>
                            Character
                        </div>
                    </div>
                    {isHeroPartOpen ? <>
                        <div className={styles.character}>
                        <figure>
                            <img src={foundPerson?.image} alt={foundPerson?.name}/>
                            <figcaption>Name: {foundPerson?.name}</figcaption>
                            <figcaption>Status: {foundPerson?.status}</figcaption>
                            <figcaption>Species: {foundPerson?.species}</figcaption>
                            <figcaption>Gender: {foundPerson?.gender}</figcaption>
                        </figure>
                        <div className={styles.episodes}>Episodes: {foundPerson?.episode.map((item: string) => (
                            <EpisodeItem item={item} fetchEpisodeInfo={fetchEpisodeInfo} />
                        ))}</div>
                        </div>
                    </> :
                        <div className={styles.episodeCard}>
                            <p>{dataEpisodes.episodes.name}</p>
                            <p>{dataEpisodes.episodes.air_date}</p>
                            <div className={styles.episodeCardImages}>
                            {dataEpisodes.episodeImages.map((el: {name: string, image: string}) => (
                                <figure>
                                    <img src={el.image} />
                                    <figcaption>{el.name}</figcaption>
                                </figure>
                                ))}
                            </div>
                    </div>
                    }
                </Modal>
            }
        </>
    )
}
