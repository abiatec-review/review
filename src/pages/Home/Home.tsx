import React from 'react';
import { useSelector } from 'react-redux';
import CardsList from '../../components/organism/CardList/CardList';
import FiltersBlock from '../../components/organism/FiltersBlock/FiltersBlock';
import Header from '../../components/organism/Header/Header';
import SortBlock from '../../components/organism/SortBlock/SortBlock';
import { RootReducer } from '../../store/reducers/index';

function Home() {

  const charactersList = useSelector((state: RootReducer) => state.characters.characters);

  return (
    <div>
      <Header />
      {Array.isArray(charactersList) &&
        <>
          <FiltersBlock />
          <SortBlock />
          <CardsList listOfCharacters={charactersList}/>
        </>
      }
    </div>
  );
}

export default Home;