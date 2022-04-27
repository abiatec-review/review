import React, { FC } from 'react';

import { ButtonProps } from './type';

const styles = {

};

export const Button: FC<ButtonProps> = ({ title, clickHandler }) => (
  <button onClick={clickHandler} className="bg-card-color p-1 rounded-md">{title}</button>
);
