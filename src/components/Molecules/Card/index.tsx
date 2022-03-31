import React from 'react';
import Image from '../../Atoms/Image';
import { ICard } from './types';

const Card: React.FC<ICard> = ({ data }) => {
  console.log(data);
  return (
    <div className="grid justify-center shadow-3xl hover:shadow-red-400 rounded-2xl overflow-hidden max-w-sm">

      <Image src={data.image} alt={data.name} />
      <div className="text-center p-2">{data.name}</div>
    </div>
  );
};

export default Card;
