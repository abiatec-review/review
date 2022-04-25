import { useState } from 'react';
import { IHeroesState } from 'redux/reducers/HeroesReducer/types';

import {ErrorComponent, Loader} from 'components/Atoms'
import ModalSignIn from '../ModalSignIn';
import { ContentElements } from './ContentElements';

import { IProps as IPropsContentElement} from './ContentElements';

import styles from './styles.module.scss'

interface IProps extends IPropsContentElement {
  userMail: string;
  heroes: IHeroesState;
}

const ContentList: React.FC<IProps>= ({heroes, characters, setSelectedHeroId, userMail, isShowFetchButton, fetchMore}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const render = () => {
    switch(true) {
      case !!userMail && !heroes.isError && !heroes?.isLoading: {
        return <ContentElements
            isShowFetchButton={isShowFetchButton}
            characters={characters}
            setSelectedHeroId={setSelectedHeroId}
            fetchMore={fetchMore}
        />
      }
      case !!userMail && heroes?.isLoading: {
        return <Loader />
      }
      case !!userMail && heroes.isError && !heroes?.isLoading: {
        return <ErrorComponent />
      }
      case isModalOpen: {
        return <ModalSignIn closeModal={ () => setIsModalOpen(false)} />
      }
      case !isModalOpen: {
        return (
          <div className={styles.textBlock}>
            <div>For using Rick&Morty App you need to authorize</div>
            <div className={styles.link} onClick={() => setIsModalOpen(true)}>Open authorization</div> 
          </div> 
        )
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
