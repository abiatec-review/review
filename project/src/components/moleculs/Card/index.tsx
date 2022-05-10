import React, { FC, useState } from 'react';

import { CardTitle, Image } from '../../atoms';
import Modal from '../../organisms/Modal';
import { CardProps } from './type';

const styles = {
  cardStyle: 'p-4 cursor-pointer hover:bg-card-color transition ease-in-out rounded-lg flex flex-col w-1/2',
};

const Card: FC<CardProps> = ({ cardData }) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return (
    <>
      <li className={styles.cardStyle} onClick={() => setIsOpenModal(true)}>
        <Image alt={cardData.name} link={cardData.image} />
        <CardTitle title={cardData.name} />
      </li>
      {isOpenModal && <Modal closeModal={() => setIsOpenModal(false)} cardData={cardData} />}
    </>
  );
};

export default Card;
