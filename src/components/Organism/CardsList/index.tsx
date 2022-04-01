import { Card } from 'components/Molecules';
import React from 'react';
import { ICardList } from 'Organism/types';

const CardsList: React.FC<ICardList> = ({ arrOfCards }) => {
  console.log('CardsList');
  return (
    <div className="grid justify-center justify-items-center gap-10 p-10 auto-cols-auto lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {arrOfCards.map((cardData) => (<Card data={cardData} key={`${cardData.name}`} />))}
    </div>
  );
};

export default CardsList;
