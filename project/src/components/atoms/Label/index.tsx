import React, { FC } from 'react';

import { LabelProps } from './type';

const styles = {
  labelStyle: '',
};

export const Label: FC<LabelProps> = ({ label }) => (
  <label>{label}</label>
);
