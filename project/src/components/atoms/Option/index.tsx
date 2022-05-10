import React, { FC } from 'react';

import { OptionProps } from './type';

export const Option: FC<OptionProps> = ({ value, type }) => (
  <option value={type}>{value}</option>
);
