import React from 'react';
import Image from '../../Atoms/Image';
import { ICard } from './types';

const Card: React.FC<ICard> = ({ data }) => {
  console.log(data);
  return (
    <Image src={data.image} alt={data.name} />
  );
};

export default Card;
