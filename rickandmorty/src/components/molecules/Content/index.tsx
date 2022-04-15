
import styles from './style.module.scss';
import { ContentItem } from "../../atoms/ContentItem";
import { EpisodeItem } from "../../atoms/EpisodeItem";
import {FetchMoreButton} from "../../atoms/FetchMoreButton";
import React, {useState} from "react";
import {Modal} from "../../atoms";
import {useDispatch} from "react-redux";
import {deleteEpisodesCharacter, getEpisodes, getEpisodesCharacter} from "../../../redux/actions";

interface IProps{
    data: any;
    visible: number;
    dataEpisodes: [];
    setVisible: (visible: number) => void
}

export const Content:React.FC<IProps> = ({data, dataEpisodes, visible, setVisible}) => {

    const [modalVisible, setModalVisible] = useState(false);

    const [id, setId] = useState('');

    const [isHeroPartOpen, setIsHeroPartOpen] = useState(true)

    const foundPerson = data?.characters?.find((item: any) => item.id === id);

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

    console.log(dataEpisodes)
    return (
        <>
            <div className={styles.gallery}>
                { data.characters.slice(0, visible).map((item:any) => (
                    <ContentItem showModal={() => setModalVisible(true)} setId={setId} item={item} />
                ))}
            </div>
            {visible < data.characters.length &&
                <FetchMoreButton visible={visible} setVisible={setVisible}/>
            }
            {modalVisible &&
                <Modal showModal={showModal} setIsHeroPartOpen={setIsHeroPartOpen}>
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
                            <figcaption>Origin name: {foundPerson?.origin?.name}</figcaption>
                            <figcaption>Location name: {foundPerson?.location?.name}</figcaption>
                        </figure>
                        <div className={styles.episodes}>Episodes: {foundPerson?.episode.map((item: any) => (
                            <EpisodeItem item={item} fetchEpisodeInfo={fetchEpisodeInfo} setIsHeroPartOpen={setIsHeroPartOpen} />
                        ))}</div>
                        </div>
                    </> :
                        <div className={styles.characterImage}>
                            {dataEpisodes.episodes.name}
                            {dataEpisodes.episodeImages.map(el => (
                                    <img src={el} />
                                ))}
                    </div>
                    }
                </Modal>
            }
        </>
    )
}
