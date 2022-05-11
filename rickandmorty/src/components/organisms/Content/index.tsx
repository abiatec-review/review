import React, {useState} from "react";
import {useDispatch} from "react-redux";
//@ts-ignore
import Loader from "react-js-loader";

import {deleteEpisodesCharacter, getCharacters, getEpisodes} from "../../../redux/actions";

import { ContentItem } from "../../molecules/ContentItem";
import { EpisodeItem } from "../../molecules/EpisodeItem";
import {FetchMoreButton} from "../../atoms/FetchMoreButton";
import {Modal} from "../../molecules";

import {TEpisode} from "../../../models/episode";
import {TCharacter} from "../../../models/character";

import styles from './style.module.scss';

interface IDataEpisodes{
    episodeImages: TCharacter<string>[];
    episodes: TEpisode<string>;
    episodesLoader: boolean
}

interface IProps {
    inputRef: React.RefObject<HTMLInputElement>
    data:  TCharacter<string>[];
    dataEpisodes: IDataEpisodes;
    info: {
        count: number
        next: string,
        pages: number,
        prev: string
    }
}

export const Content:React.FC<IProps> = ({data, info, dataEpisodes, inputRef}) => {

    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [id, setId] = useState<number>(0);
    const [isHeroPartOpen, setIsHeroPartOpen] = useState<boolean>(true)

    const foundPerson = data?.find((item: TCharacter<string>) => item.id === +id);

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

    const fetchMoreCharacters = () => {
        dispatch(getCharacters( {characterName: inputRef?.current?.value as string}  ))
    }


    return (
        <>
            <div className={styles.gallery}>
                {data
                    .map((item: TCharacter<string>) => (
                    <ContentItem key={item.id} showModal={() => setModalVisible(true)} setId={setId} item={item} />
                ))}
            </div>

            {data.length > 0 && info !== null &&
                <FetchMoreButton clickHandler={fetchMoreCharacters}/>
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
                    {isHeroPartOpen ?
                        <>
                           <div className={styles.character}>
                                    <figure>
                                        <img src={foundPerson?.image} alt={foundPerson?.name}/>
                                        <figcaption className={styles.figcaptionImg}>Name: {foundPerson?.name}</figcaption>
                                        <figcaption className={styles.figcaptionImg}>Status: {foundPerson?.status}</figcaption>
                                        <figcaption className={styles.figcaptionImg}>Species: {foundPerson?.species}</figcaption>
                                        <figcaption className={styles.figcaptionImg}>Gender: {foundPerson?.gender}</figcaption>
                                    </figure>
                                    <div
                                        className={styles.episodes}>Episodes: {foundPerson?.episode.map((item: string) => (
                                        <EpisodeItem key={item} item={item} fetchEpisodeInfo={fetchEpisodeInfo}/>
                                    ))}</div>
                                </div>
                    </> :
                        <>
                        {dataEpisodes.episodesLoader ?
                             <Loader type="spinner-cub" bgColor={"#FFFFFF"} color={'aquamarine'} size={100}/>
                             :
                            <div className={styles.episodeCard}>
                                <p>{dataEpisodes.episodes.name}</p>
                                <p>{dataEpisodes.episodes.air_date}</p>
                                <div className={styles.episodeCardImages}>
                                    {dataEpisodes.episodeImages.map((el: {name: string, image: string}) => (
                                        <figure key={el.name} className={styles.figure}>
                                            <img className={styles.episodeImg} src={el.image} />
                                            <figcaption className={styles.figcaptionImg}>{el.name}</figcaption>
                                        </figure>
                                    ))}
                                </div>
                            </div>
                        }
                        </>
                    }
                </Modal>
            }
        </>
    )
}
