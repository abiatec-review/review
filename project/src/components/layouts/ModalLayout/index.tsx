import React, { FC } from 'react';

const styles = {
  modalLayoutStyle: 'fixed top-0 left-0 right-0 bottom-0 p-10 flex items-center justify-center bg-modal-color',
};

const ModalLayout: FC = ({ children }) => (
  <div className={styles.modalLayoutStyle}>
    {children}
  </div>
);

export default ModalLayout;
