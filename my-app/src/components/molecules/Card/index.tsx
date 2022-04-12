import styles from './styles.module.scss'
import { Button, Picture, TitleText } from "components/atoms"
import { constants } from 'utils/constants'
import { useEffect, useState } from 'react'
import { Modal } from '../Modal'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames'
import { getEpisode } from 'redux/actions/episode'
import { setCharacter, setEpisode } from 'redux/actions/modalType'


interface IProps {
  srcImage: string
  titleText: any
}

export const Card: React.FC<IProps> = ( {srcImage, titleText} )=> {

  const {characters} = useSelector((state: RootStateOrAny) => state);
  const {episode: {episodeInfo, episodeId}} = useSelector((state: RootStateOrAny) => state);
  const {modalType} = useSelector((state: RootStateOrAny) => state.modalType);
  const [isOpen, setIsOpen] = useState(false);
  const [char, setChar] = useState(characters.charactersList[0]);
  const dispatch = useDispatch();

  const openModal = (event: any) => {
    setIsOpen(true);
    const targetChar = characters.charactersList.find((char: { image: any }) => char.image === event.target.src)
    setChar(targetChar)
  }

  const closeModal = () => {
    setIsOpen(false);
    dispatch(setCharacter('character'))
  }

  const modalEpisodeRequest = (event:any) => {
    event?.preventDefault();
    const current = document.getElementById('episode') as HTMLSelectElement;
    dispatch(getEpisode(current.value));

    setTimeout(() => {
      dispatch(setEpisode('episode'))
    }, 450)
  }

  const modalCharsRequest = () => {
    dispatch(getEpisode(episodeId))
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
              <select id={'episode'} className={styles.episodeList}>
                {char.episode.map((e: any) => {
                  return <option key={e} value={Number(e.split('/').slice(-1))}>Episode № {Number(e.split('/').slice(-1))}</option>
                })}
              </select>
              <Button className={styles.modalSubmit} handleClick={modalEpisodeRequest} type={'submit'} buttonName={'Show me this episode'} />
            </form>
          </>
        )
      case "episode":
        return (
          <>
            <TitleText titleText={episodeInfo.name} className={styles.modalEpisodeName} />
            <p className={styles.modalDescription}>Characters in this episode:</p>
            <div className={styles.charsInEpisodeBox}>
              {episodeInfo.randomCharsList.map((ep:any) => {
                return <div key={ep.id} className={styles.charInEpisode}>
                <Picture type={constants.CHARS_MODAL_PICTURE} srcImage={ep.image} />
                <p className={styles.modalDescription} style={{margin: 0}}>{ep.name}</p>
              </div>
              })}
              <Button className={styles.modalSubmit} type={'button'} buttonName={'Another characters'} handleClick={modalCharsRequest}/>
            </div>
          </>
        )
    }
  }
  
    return ( 
      <div className={styles.card}>
         {isOpen && <Modal onClose={closeModal}>
              <div className={styles.modalInside}>
                <Button className={styles.closeButton} handleClick={closeModal} type={'button'}></Button>
                <div className={styles.modalTabs}>
                  <Button className={modalType === "character" ? classNames(styles.modalNavButton, styles.modalNavButtonActive) : styles.modalNavButton} 
                          handleClick={()=>{dispatch(setCharacter('character'))}} type={'button'} buttonName={'About Character'}/>
                  <Button className={modalType === "episode" ? classNames(styles.modalNavButton, styles.modalNavButtonActive) : styles.modalNavButton} 
                          handleClick={modalEpisodeRequest} type={'button'} buttonName={'About Episode'}/>
                </div>
                {modalLayout()}
             </div>
             </Modal>}
        <Picture type={constants.CARD_PICTURE} srcImage={srcImage} click={openModal}/>
        <TitleText titleText={titleText} className={styles.cardTitle} />
      </div>
    )
  } 