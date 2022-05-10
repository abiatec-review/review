import React, { FC } from 'react';

import ReactDOM from 'react-dom';

import ModalHeader from '../../moleculs/ModalHeader';
import { ModalLayoutProps } from './type';

const styles = {
  modalLayoutStyle: 'fixed top-0 left-0 right-0 bottom-0 p-10 flex items-center justify-center bg-modal-color',
  modalWrapper: 'max-w-xl w-full bg-white rounded-lg p-10 overflow-auto flex flex-col items-center',
};

const rootModal = document.getElementById('modal') as HTMLElement;

const ModalLayout: FC<ModalLayoutProps> = ({ closeModal, title, children }) => ReactDOM.createPortal(
  (
    <div className={styles.modalLayoutStyle}>
      <div className={styles.modalWrapper}>
        <ModalHeader closeModal={closeModal} title={title} />
        {children}
      </div>
    </div>
  ), rootModal,
);

export default ModalLayout;
