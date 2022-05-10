import React, { FC } from 'react';

import { Image } from '../../atoms';
import ModalLayout from '../../layouts/ModalLayout';
import Tabs from '../Tabs';
import { ModalProps } from './type';

const Modal: FC<ModalProps> = ({ closeModal, cardData }) => {
  const { name } = cardData;

  return (
    <ModalLayout closeModal={closeModal} title={name}>
      <Image link={cardData.image} alt={cardData.name} />
      <Tabs cardData={cardData} />
    </ModalLayout>
  );
};

export default Modal;
