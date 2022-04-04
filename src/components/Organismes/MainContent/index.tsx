import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadMoreHeroesAC } from "redux/actions/heroActions";
import { getContentfulFieldsSelector } from "redux/selectors/contentfulSelectors";
import { getEpisodeSelector } from "redux/selectors/episodeSelectors";
import { getHeroesSelector, getHeroNameSelector, getNextPageSelector } from "redux/selectors/heroesSelectors";

import {Button, ErrorComponent, Loader} from "components/Atoms";
import { ContentList, ModalHero } from "components/Molecules";

import { defineNextPage } from "utils/validator";

import styles from './index.module.scss';

const MainContent = () => {

  const heroes = useSelector(getHeroesSelector)
  const episode = useSelector(getEpisodeSelector)
  const contentfulInfo = useSelector(getContentfulFieldsSelector)
  const nextPage = useSelector(getNextPageSelector)
  const name = useSelector(getHeroNameSelector)

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
  
  const searchResult = !heroes.isError ? <ContentList characters={heroes?.heroes} setSelectedHeroId={openModal}/> : <ErrorComponent />
  const fetchButton = isShowFetchButton && <Button className={styles.button} onClick={fetchMore}>Fetch more</Button>
  return (
    <div>
      {isModalOpen && <ModalHero episode={episode} hero={heroes.heroes.find((hero: any) => hero.id === selectedHeroId)} setIsModalOpen={() => setIsModalOpen(false)} />}
      <div className={styles.content}>
        <h1 className={styles.header}>{contentfulInfo?.title || 'Rick and Morty'}</h1>
        {heroes?.isLoading ? <Loader /> : searchResult}
        {fetchButton}
      </div>
    </div>
  )
}

export default MainContent;