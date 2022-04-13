import React, { FC } from 'react';

import CardTitle from '../../atoms/CardTitle';
import CloseButton from '../../atoms/CloseButton';
import { ModalHeaderProps } from './type';

const styles = {
  modalHeaderStyle: 'flex justify-between items-center mb-4 w-3/4',
};

const ModalHeader: FC<ModalHeaderProps> = ({ title, closeModal }) => (
  <div className={styles.modalHeaderStyle}>
    <CardTitle title={title} />
    <CloseButton closeModal={closeModal} />
  </div>
);

export default ModalHeader;
