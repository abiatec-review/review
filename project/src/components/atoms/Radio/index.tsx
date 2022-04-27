import React, { FC, useState } from 'react';

import { RadioProps } from './type';

const styles = {
  inputStyle: 'mr-2',
};

export const Radio: FC<RadioProps> = ({
  name, type, value, changeHandler,
}) => (
  <input
    checked={value === name}
    onChange={changeHandler}
    type={type}
    value={name}
    className={styles.inputStyle}
  />
);
