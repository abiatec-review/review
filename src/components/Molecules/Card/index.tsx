import { Image } from 'components/Atoms';
import React from 'react';
import { ICard } from 'Molecules/types';
import { cardStyles } from './styles.tailwind';

const Card: React.FC<ICard> = ({ data }) => {
  console.log(data);
  return (
    <div className={`${cardStyles}`}>

      <Image src={data.image} alt={data.name} />
      <div className="text-center p-2">{data.name}</div>
    </div>
  );
};

export default Card;
