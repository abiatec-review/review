import React from 'react';

import { useDispatch } from 'react-redux';
import { showModal } from 'redux&saga/actions/modalActions';

import { Image } from 'components/Atoms';
import { ICard } from 'Molecules/types';

import { cardStyles } from './styles.tailwind';

const Card: React.FC<ICard> = ({ data }) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(showModal(data));
  };
  return (
    <div className={`${cardStyles}`} role="listitem" onMouseDown={clickHandler}>
      <Image src={data.image} alt={data.name} />
      <div className="text-center p-2">{data.name}</div>
    </div>
  );
};

export default Card;