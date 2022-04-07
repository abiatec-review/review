import { IContentItem } from 'redux/reducers/HeroesReducer/types';

import {Button, ContentItem, LoginForm, Modal} from 'components/Atoms'

import styles from './index.module.scss'
import { useState } from 'react';
import ModalSignIn from '../ModalSignIn';
interface IProps {
  characters: IContentItem[];
  setSelectedHeroId: (id: string) => () => void;
  userMail: string;
  isShowFetchButton: boolean;
  fetchMore: () => void
}

const ContentList: React.FC<IProps>= ({characters, setSelectedHeroId, userMail, isShowFetchButton, fetchMore}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const fetchButton = isShowFetchButton && <Button className={styles.button} onClick={fetchMore}>Fetch more</Button>

  const contentElement = <>
  <ul className={styles.list}>
      {characters?.map((character: IContentItem) => {
        return <ContentItem 
                  key={character.id} 
                  image={character.image}
                  name={character.name}
                  id={character.id}
                  setSelectedHeroId={setSelectedHeroId}
                />
    })}
    
  </ul>
  {fetchButton}
  </>

  const render = () => {
    switch(true) {
      case !!userMail: {
        return contentElement
      }
      case isModalOpen: {
        return <ModalSignIn closeModal={ () => setIsModalOpen(false)} />
      }
      case !isModalOpen: {
        return <div className={styles.link} onClick={() => setIsModalOpen(true)}>Open registration</div>
      }
    }
  }
  
  return (
      <>
        {render()}
      </>
    )
}

export default ContentList;
