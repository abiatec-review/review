/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import { IButton } from './types';

const Button: React.FC<IButton> = ({ clickHandler }) => {
  console.log('Button');

  return (
    <div
      style={{
        padding: '10px', border: 'solid black 1px', width: '80px', textAlign: 'center',
      }}
      onClick={clickHandler}
    >
      Click
    </div>
  );
};

export default Button;
