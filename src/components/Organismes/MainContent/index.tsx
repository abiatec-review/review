import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadMoreHeroesAC } from "redux/actions/heroActions";
import { getContentfulFieldsSelector } from "redux/selectors/contentfulSelectors";
import { getEpisodeSelector } from "redux/selectors/episodeSelectors";
import { getHeroesSelector, getHeroNameSelector, getNextPageSelector } from "redux/selectors/heroesSelectors";

import {Button, ErrorComponent, Loader, LoginForm} from "components/Atoms";
import { ContentList, HeaderBlock, ModalHero } from "components/Molecules";

import { defineNextPage } from "utils/validator";

import styles from './index.module.scss';
import { getUserMail } from "redux/selectors/userSelectors";
import ModalSignIn from "components/Molecules/ModalSignIn";

const MainContent = () => {

  const heroes = useSelector(getHeroesSelector)
  const episode = useSelector(getEpisodeSelector)
  const contentfulInfo = useSelector(getContentfulFieldsSelector)
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
  
  const renderHeroes = () => {
    switch (true) {
      case heroes?.isLoading: {
        return <Loader />
      }
      case !heroes.isError && !heroes?.isLoading: {
        return <ContentList userMail={userMail} characters={heroes?.heroes} setSelectedHeroId={openModal} fetchMore={fetchMore} isShowFetchButton={isShowFetchButton}/>
      }
      case heroes.isError && !heroes?.isLoading: {
        return <ErrorComponent />
      }
    }
  }

  return (
    <div>
        <HeaderBlock userMail={userMail}/>
        {isModalOpen && <ModalHero episode={episode} hero={heroes.heroes.find((hero: any) => hero.id === selectedHeroId)} setIsModalOpen={() => setIsModalOpen(false)} />}
        <div className={styles.content}>
          {renderHeroes()}
        </div>
    </div>
  )
}

export default MainContent;