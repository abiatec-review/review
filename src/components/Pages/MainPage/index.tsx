/* eslint-disable import/no-unresolved */
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux&saga';
import { CardsList, Header, Modal } from '../../Organism';
// import { changeCharName, getCards } from '../../../redux/actions/cardsAction';

const MainPage: React.FC = () => {
  const cards = useSelector((state: RootState) => state.cards);

  return (
    <div className="grid grid-cols-1 justify-center items-center ">
      <Header />
      <CardsList arrOfCards={cards.cardsList.results} />
      <Modal />
    </div>
  );
};

export default MainPage;
