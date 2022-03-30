import React from 'react';
import { IInput } from './types';

const Input: React.FC<IInput> = ({ ref }) => {
  console.log('Input');
  return (
    <input ref={ref} />
  );
};

export default Input;
