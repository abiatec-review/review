import {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadMoreHeroesAC } from "redux/actions/heroActions";
import { getEpisodeSelector } from "redux/selectors/episodeSelectors";
import { getUserMail } from "redux/selectors/userSelectors";
import { IContentItem } from "redux/reducers/HeroesReducer/types";
import {
  getFilteredHeroesSelector,
  getHeroesSelector,
  getHeroNameSelector,
  getNextPageSelector,
  getSortedHeroesSelector
} from "redux/selectors/heroesSelectors";

import { ContentList, HeaderBlock, ModalHero } from "components/Molecules";
import {Button, SortBlock, FilterBlock} from "components/Atoms";

import { defineNextPage } from "utils/validator";

import styles from './index.module.scss';
import {overflowHidden} from "../../../utils/helpers";
import {useCharacterModal} from "../../../utils/hooks";

const MainContent = () => {

  const heroes = useSelector(getHeroesSelector)

  const allHeroes = useSelector(getFilteredHeroesSelector)
  const episode = useSelector(getEpisodeSelector)
  const nextPage = useSelector(getNextPageSelector)
  const name = useSelector(getHeroNameSelector)
  const userMail = useSelector(getUserMail)
  const dispatch = useDispatch();

  const [isFilterModalOpen, setIsFilterModalOpen] = useState<boolean>(false)
  const {openModal, selectedHeroId, isModalOpen, setIsModalOpen } = useCharacterModal()

  useEffect(() => {
    overflowHidden(isFilterModalOpen)
  }, [isFilterModalOpen])

  const fetchMore = () => {
    dispatch(loadMoreHeroesAC({
      name: name || '', 
      page: defineNextPage(nextPage) || '1'
    }))
  }

  const isShowFetchButton = !heroes?.isLoading && !heroes?.isError && !!allHeroes?.length && nextPage;
  
  return (
    <div>
        <HeaderBlock userMail={userMail}/>
        {isModalOpen && 
        <ModalHero 
          episode={episode} 
          hero={allHeroes.find((hero: IContentItem) => hero.id === selectedHeroId)}
          setIsModalOpen={() => setIsModalOpen(false)} 
        />}
        <div className={styles.content}>
          <SortBlock />
          {isFilterModalOpen && <FilterBlock closeFilterModal={() => setIsFilterModalOpen(false)}/>}
          {!isFilterModalOpen
            && <Button
                className={styles.buttonFilter}
                onClick={() => setIsFilterModalOpen(true)}>Open filtration</Button>}
          <ContentList 
            heroes={heroes} 
            userMail={userMail} 
            characters={allHeroes}
            setSelectedHeroId={openModal} 
            fetchMore={fetchMore} 
            isShowFetchButton={isShowFetchButton}
          />
        </div>
    </div>
  )
}

export default MainContent;