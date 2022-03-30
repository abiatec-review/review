/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable react/button-has-type */

import React from 'react';
import { IButton } from './types';

const Button: React.FC<IButton> = ({ clickHandler }) => {
  console.log('Button');

  return (
    <button
      onClick={clickHandler}
      className="mt-5 border-black border-2 border-solid rounded"
    >
      Click
    </button>
  );
};

export default Button;
