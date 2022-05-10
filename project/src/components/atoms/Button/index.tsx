import React, { FC } from 'react';

import { ButtonProps } from './type';

const styles = {
  buttonStyle: 'py-1 px-4 rounded-md',
};

export const Button: FC<ButtonProps> = ({ title, clickHandler, isDisabled = false }) => (
  <button
    onClick={clickHandler}
    className={`${styles.buttonStyle} ${isDisabled ? 'bg-gray-200 text-gray-400' : 'bg-card-color'}`}
    disabled={isDisabled}
  >
    {title}
  </button>
);
