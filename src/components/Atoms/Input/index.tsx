import React from 'react';
import { IInput } from 'Atoms/types';
import { inputStyles } from './styles.tailwind';

const Input: React.FC<IInput> = ({ reference }) => {
  console.log('Input');
  return (
    <input ref={reference} className={`${inputStyles}`} />
  );
};

export default Input;
