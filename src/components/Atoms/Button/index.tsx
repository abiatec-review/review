import React from 'react';
import { IButton } from 'Atoms/types';
import { buttonStyles } from './styles.tailwind';

export const Button: React.FC<IButton> = ({ clickHandler, text }) => (
  <button
    onClick={clickHandler}
    className={`${buttonStyles}`}
  >
    {text}
  </button>
);
