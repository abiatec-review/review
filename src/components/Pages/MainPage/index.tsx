/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux';
// import { changeCharName, getCards } from '../../../redux/actions/cardsAction';
import { CardsList, Header } from '../../Organism';

const MainPage: React.FC = () => {
  const cards = useSelector((state: RootState) => state.cards);

  return (
    <div className="grid grid-cols-1 justify-center items-center ">
      <Header />
      <CardsList arrOfCards={cards.cardsList.results} />
    </div>
  );
};

export default MainPage;
