import classNames from 'classnames'
import React, { useState } from 'react'

import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { getEpisode } from 'redux/actions/episode'
import { setCharacter, setEpisode } from 'redux/actions/modalType'

import { Modal } from '../Modal'
import { Button, Picture, TitleText } from "components/atoms"

import {getCharEpisode, selectEpisode} from 'utils/helpers'
import { constants } from 'utils/constants'

import styles from './styles.module.scss'


interface IProps {
  srcImage: string
  titleText: string
}

export const Card: React.FC<IProps> = ( {srcImage, titleText} )=> {

  const {characters} = useSelector((state: RootStateOrAny) => state);
  const {episode: {episodeInfo, episodeId}} = useSelector((state: RootStateOrAny) => state);
  const {modalType} = useSelector((state: RootStateOrAny) => state.modalType);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [char, setChar] = useState(characters.charactersList[0]);
  const [selectedValue, setSelectedValue] = useState<number>(0);
  const dispatch = useDispatch();
  

  const openModal = (event: any) => {
    setIsOpen(true);
    const targetChar = characters.charactersList.find((char: { image: string }) => char.image === event.target.src);
    setChar(targetChar);
    setSelectedValue(getCharEpisode(targetChar))
  }

  const closeModal = () => {
    setIsOpen(false);
    dispatch(setCharacter('character'))
  }

  const modalEpisodeRequest = (event: any) => {
    event?.preventDefault();
    dispatch(getEpisode(selectedValue));

    dispatch(setEpisode('episode'));
  }

  const modalCharsRequest = () => {
    dispatch(getEpisode(episodeId))
  }

  const onChangeSelect = (event: any) => {
    setSelectedValue(event?.target.value)
  }

  
  function modalLayout() {
    switch (modalType) {
      case "character":
        return (
          <>
            <Picture type={constants.MAIN_MODAL_PICTURE} srcImage={char.image} />
            <TitleText titleText={char.name} className={styles.modalCharName} />
            <p className={styles.modalDescription}>Status: {char.status}</p>
            <form className={styles.modalForm}>
              <select id={'episode'} className={styles.episodeList} onChange={onChangeSelect}>
                {char.episode.map((e: string) => {
                  return <option key={e} value={selectEpisode(e)!}>Episode № {selectEpisode(e)}</option>
                })}
              </select>
              <Button className={styles.modalSubmit} handleClick={modalEpisodeRequest} type={'submit'}>{'Show me this episode'}</Button>
            </form>
          </>
        )
      case "episode":
        return (
          <>
            <TitleText titleText={episodeInfo.name} className={styles.modalEpisodeName} />
            <p className={styles.modalDescription}>Characters in this episode:</p>
            <div className={styles.charsInEpisodeBox}>
              {episodeInfo.randomCharsList?.map((ep:any) => {
                return <div key={ep.id} className={styles.charInEpisode}>
                <Picture type={constants.CHARS_MODAL_PICTURE} srcImage={ep.image} />
                <p className={styles.modalDescription} style={{margin: 0}}>{ep.name}</p>
              </div>
              })}
              <Button className={styles.modalSubmit} type={'button'} handleClick={modalCharsRequest}>{'Another characters'}</Button>
            </div>
          </>
        )
    }
  }
  
    return ( 
      <div className={styles.card}>
         {isOpen && <Modal onClose={closeModal}>
              <div className={styles.modalInside}>
                <Button className={styles.closeButton} handleClick={closeModal} type={'button'}/>
                <div className={styles.modalTabs}>
                  <Button className={modalType === "character" ? classNames(styles.modalNavButton, styles.modalNavButtonActive) : styles.modalNavButton} 
                          handleClick={()=>{dispatch(setCharacter('character'))}} 
                          type={'button'}>{'About Character'}</Button>
                  <Button className={modalType === "episode" ? classNames(styles.modalNavButton, styles.modalNavButtonActive) : styles.modalNavButton} 
                          handleClick={modalType !== "episode" ? modalEpisodeRequest : null} 
                          type={'button'}>{'About Episode'}</Button>
                </div>
                {modalLayout()}
             </div>
             </Modal>}
        <Picture type={constants.CARD_PICTURE} srcImage={srcImage} click={openModal}/>
        <TitleText titleText={titleText} className={styles.cardTitle} />
      </div>
    )
  } 