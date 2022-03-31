import React from 'react';
import { IInput } from './types';

const Input: React.FC<IInput> = ({ reference }) => {
  console.log('Input');
  return (
    <input ref={reference} className="h-10 border-black border-2 border-solid rounded text-center" />
  );
};

export default Input;
