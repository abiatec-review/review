import { useState } from "react";
import { useSelector } from "react-redux";

import { RootReducer } from "../../../redux/reducers";

import ErrorComponent from "../../Atoms/ErrorComponent/ErrorComponent";
import { Loader } from "../../Atoms/Loader/Loader";
import ContentList from "../../Molecules/ContentList";
import { ModalHero } from "../../Molecules/ModalHero";

export const MainContent = () => {

  const store = useSelector((store: RootReducer) => store.heroes)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHeroId, setSelectedHeroId] = useState('');

  const openModal = (id: string) => {
    setSelectedHeroId(id);
    setIsModalOpen(true)
  }

  const searchResult = !store.isError ? <ContentList characters={store?.heroes} setSelectedHeroId={openModal}/> : <ErrorComponent />
  return (
    <div>
      {isModalOpen && <ModalHero hero={store.heroes.find(hero => hero.id === selectedHeroId)} setIsModalOpen={() => setIsModalOpen(false)} />}
      <div className='content'>
        <h1>Simple content list</h1>
        { store?.isLoading ? <Loader /> : searchResult}
      </div>
    </div>
  )
}