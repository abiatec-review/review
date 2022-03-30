/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux';
// import { changeCharName, getCards } from '../../../redux/actions/cardsAction';
import { Header } from '../../Organism';

const MainPage: React.FC = () => {
  const cards = useSelector((state: RootState) => state.cards);

  return (
    <div className="grid justify-center items-center">
      <Header />
      <div>{cards.cardsList.results.map((e:{name: string}) => e.name)}</div>
    </div>
  );
};

export default MainPage;
