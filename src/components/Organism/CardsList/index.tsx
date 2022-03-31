import React from 'react';
import { Card } from '../../Molecules';
import { ICardList } from './types';

const CardsList: React.FC<ICardList> = ({ arrOfCards }) => {
  console.log('CardsList');
  return (
    <div>
      {arrOfCards.map((cardData) => (<Card data={cardData} />))}
    </div>
  );
};

export default CardsList;
