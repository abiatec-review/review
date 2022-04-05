import React from 'react';
import { IButton } from 'Atoms/types';
import { buttonStyles } from './styles.tailwind';

const Button: React.FC<IButton> = ({ clickHandler, text }) => (
  <button
    onClick={clickHandler}
    className={`${buttonStyles}`}
  >
    {text}
  </button>
);

export default Button;
