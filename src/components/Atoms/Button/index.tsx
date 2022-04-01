/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable react/button-has-type */

import React from 'react';
import { IButton } from 'Atoms/types';

const Button: React.FC<IButton> = ({ clickHandler, text }) => {
  console.log('Button');

  return (
    <button
      onClick={clickHandler}
      className="mt-5 py-1 border-black rounded shadow-inner-md"
    >
      {text}
    </button>
  );
};

export default Button;
