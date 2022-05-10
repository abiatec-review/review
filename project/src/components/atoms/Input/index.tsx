import React, { FC } from 'react';

import { InputProps } from './type';

const styles = {
  inputStyle: 'outline-none border-input-color border-2 rounded-md p-1 text-2xl',
};

export const Input: FC<InputProps> = ({ value, changeHandler, ...rest }) => (
  <input
    className={styles.inputStyle}
    type={rest.type}
    value={value}
    onChange={changeHandler}
    placeholder={rest.placeholder}
  />
);
