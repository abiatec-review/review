import { useState } from "react";
import { useSelector } from "react-redux";

import { RootReducer } from "../../../redux/reducers";
import { getFieldsSelector } from "../../../redux/selectors/contentfulSelectors";

import {ErrorComponent, Loader} from "../../Atoms";
import { ContentList, ModalHero } from "../../Molecules";

export const MainContent = () => {

  const heroes = useSelector((store: RootReducer) => store.heroes)
  const episode = useSelector((store: RootReducer) => store.episode)
  const contentfulInfo = useSelector(getFieldsSelector)

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHeroId, setSelectedHeroId] = useState('');

  const openModal = (id: string) => {
    setSelectedHeroId(id);
    setIsModalOpen(true)
  }

  const searchResult = !heroes.isError ? <ContentList characters={heroes?.heroes} setSelectedHeroId={openModal}/> : <ErrorComponent />
  return (
    <div>
      {isModalOpen && <ModalHero episode={episode} hero={heroes.heroes.find(hero => hero.id === selectedHeroId)} setIsModalOpen={() => setIsModalOpen(false)} />}
      <div className='content'>
        <h1>{contentfulInfo?.title}</h1>
        { heroes?.isLoading ? <Loader /> : searchResult}
      </div>
    </div>
  )
}