import React from 'react';
import { IInput } from 'Atoms/types';
import { inputStyles } from './styles.tailwind';

export const Input: React.FC<IInput> = ({ reference }) => (
  <input ref={reference} className={`${inputStyles}`} />
);
