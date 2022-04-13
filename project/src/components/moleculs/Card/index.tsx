import React, { FC, useState } from 'react';

import CardTitle from '../../atoms/CardTitle';
import Image from '../../atoms/Image';
import Modal from '../../organisms/Modal';
import { CardProps } from './type';

const styles = {
  cardStyle: 'p-4 cursor-pointer hover:bg-card-color transition ease-in-out rounded-lg flex flex-col w-1/2',
};

const Card: FC<CardProps> = ({ cardData }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <li className={styles.cardStyle} onClick={() => setIsOpenModal(true)}>
        <Image alt={cardData.name} link={cardData.image} />
        <CardTitle title={cardData.name} />
      </li>
      {isOpenModal ? <Modal closeModal={() => setIsOpenModal(false)} cardData={cardData} /> : null}
    </>
  );
};

export default Card;
