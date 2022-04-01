/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable react/button-has-type */

import React from 'react';
import { IButton } from 'Atoms/types';
import { buttonStyles } from './styles.tailwind';

const Button: React.FC<IButton> = ({ clickHandler, text }) => {
  console.log('Button');

  return (
    <button
      onClick={clickHandler}
      className={`${buttonStyles}`}
    >
      {text}
    </button>
  );
};

export default Button;
