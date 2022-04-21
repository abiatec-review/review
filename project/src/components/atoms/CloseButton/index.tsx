import React, { FC } from 'react';

import { CloseButtonProps } from './type';

const styles = {
  buttonStyle: 'bg-card-color p-1 rounded-md',
};

export const CloseButton: FC<CloseButtonProps> = ({ closeModal }) => (
  <button
    onClick={closeModal}
    className={styles.buttonStyle}
  >
    Close
  </button>
);
