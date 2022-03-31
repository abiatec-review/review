/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable react/button-has-type */

import React from 'react';
import { IButton } from './types';

const Button: React.FC<IButton> = ({ clickHandler }) => {
  console.log('Button');

  return (
    <button
      onClick={clickHandler}
      className="mt-5 py-1 border-black rounded shadow-inner-md"
    >
      Click
    </button>
  );
};

export default Button;
