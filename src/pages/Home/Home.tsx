import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CardsList from '../../components/organism/CardList/CardList';
import Header from '../../components/organism/Header/Header';
import { RootReducer } from '../../store/reducers/index';

function Home() {

  const charactersList = useSelector((state: RootReducer) => state.characters.characters);

  useEffect(() => {
    console.log(charactersList);
  });

  return (
    <div>
      <Header />
      {Array.isArray(charactersList) && <CardsList listOfCharacters={charactersList}/> }
    </div>
  );
}

export default Home;