import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadMoreHeroesAC } from "redux/actions/heroActions";
import { getEpisodeSelector } from "redux/selectors/episodeSelectors";
import { getUserMail } from "redux/selectors/userSelectors";
import { IContentItem } from "redux/reducers/HeroesReducer/types";
import { getHeroesSelector, getHeroNameSelector, getNextPageSelector } from "redux/selectors/heroesSelectors";

import { ContentList, HeaderBlock, ModalHero } from "components/Molecules";

import { defineNextPage } from "utils/validator";

import styles from './index.module.scss';

const MainContent = () => {

  const heroes = useSelector(getHeroesSelector)
  const episode = useSelector(getEpisodeSelector)
  const nextPage = useSelector(getNextPageSelector)
  const name = useSelector(getHeroNameSelector)
  const userMail = useSelector(getUserMail)

  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedHeroId, setSelectedHeroId] = useState<string>('');

  const openModal = (id:string) => () => {
    setSelectedHeroId(id)
    setIsModalOpen(true)
  }
    
  const fetchMore = () => {
    dispatch(loadMoreHeroesAC({
      name: name || '', 
      page: defineNextPage(nextPage) || '1'
    }))
  }

  const isShowFetchButton = !heroes?.isLoading && !heroes.isError && heroes?.heroes?.length > 19 && nextPage;
  
  return (
    <div>
        <HeaderBlock userMail={userMail}/>
        {isModalOpen && 
        <ModalHero 
          episode={episode} 
          hero={heroes.heroes.find((hero: IContentItem) => hero.id === selectedHeroId)} 
          setIsModalOpen={() => setIsModalOpen(false)} 
        />}
        <div className={styles.content}>
          <ContentList 
            heroes={heroes} 
            userMail={userMail} 
            characters={heroes?.heroes} 
            setSelectedHeroId={openModal} 
            fetchMore={fetchMore} 
            isShowFetchButton={isShowFetchButton}
          />
        </div>
    </div>
  )
}

export default MainContent;