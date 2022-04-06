import { Card } from 'components/Molecules';
import React from 'react';
import { ICardList } from 'Organism/types';
import { cardListStyles } from './styles.tailwind';

const CardsList: React.FC<ICardList> = ({ arrOfCards }) => (arrOfCards ? (
  <div className={`${cardListStyles}`}>
    {arrOfCards.map((cardData) => (
      <Card data={cardData} key={`${cardData.name}`} />
    ))}
  </div>
) : null);

export default CardsList;
