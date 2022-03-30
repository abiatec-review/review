import { useSelector } from "react-redux";

import "./App.css";

import { MainLayout } from "./layouts/MainLayoute";
import ContentList from "./components/Molecules/ContentList";
import { ErrorComponent } from "./components/Atoms/ErrorComponent/ErrorComponent";
import { Loader } from "./components/Atoms/Loader/Loader";
import { Modal } from "./components/Atoms/Modal";
import { useState } from "react";


const App = () => {
  const store = useSelector(store => store)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedHeroId, setSelectedHeroId] = useState(null);

  console.log(selectedHeroId)

  const openModal = (id) => {
    setSelectedHeroId(id);
    setIsModalOpen(true)
  }

  const searchResult = !store.isError ? <ContentList characters={store?.heroes} setSelectedHeroId={openModal}/> : <ErrorComponent />
  return (
    <div className="App">
      <MainLayout className="main-app">
        <div>
          {isModalOpen && <Modal hero={store?.heroes.find(hero => hero.id === selectedHeroId)} setIsModalOpen={() => setIsModalOpen(false)}>
          </Modal>}
          <div className='content'>
            <h1>Simple content list</h1>
            { store.isLoading ? <Loader /> : searchResult}
          </div>
        </div>
      </MainLayout>
    </div>
  )
}

export default App;
