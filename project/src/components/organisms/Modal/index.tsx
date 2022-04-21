import React, { FC } from 'react';

import ReactDOM from 'react-dom';

import { Image } from '../../atoms';
import ModalLayout from '../../layouts/ModalLayout';
import ModalHeader from '../../moleculs/ModalHeader';
import Tabs from '../Tabs';
import { ModalProps } from './type';

const styles = {
  modalStyle: 'max-w-xl w-full bg-white rounded-lg p-10 overflow-auto flex flex-col items-center',
};

const rootModal = document.getElementById('modal') as HTMLElement;

const Modal: FC<ModalProps> = ({ closeModal, cardData }) => {
  const { name } = cardData;

  return ReactDOM.createPortal(
    (
      <ModalLayout>
        <div className={styles.modalStyle}>
          <ModalHeader closeModal={closeModal} title={name} />
          <Image link={cardData.image} alt={cardData.name} />
          <Tabs cardData={cardData} />
        </div>
      </ModalLayout>
    ),
    rootModal,
  );
};

export default Modal;
